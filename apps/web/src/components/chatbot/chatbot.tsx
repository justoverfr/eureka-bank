'use client';

import { useState } from 'react';

import './style.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  MessageModel,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import dotenv from 'dotenv';

import GreenBtnV2 from '../button/GreenBtnV2';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const systemMessage = {
  role: 'system',
  content: 'ui ',
};

function Chatbot() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: "Hello, I'm your virutal assistant at Eureka Bank",
      sentTime: 'just now',
      sender: 'ChatGPT',
      direction: 'incoming',
      position: 'single',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (messageText: string) => {
    const newMessage = {
      message: messageText,
      sentTime: 'just now',
      direction: 'outgoing',
      sender: 'user',
      position: 'single',
    } satisfies MessageModel;

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: MessageModel[]) {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + OPENAI_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sentTime: 'just now',
            sender: 'ChatGPT',
            direction: 'incoming',
            position: 'single',
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="chatbot-wrapper">
      {isChatVisible && (
        <div className="chatbot-popup">
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
              >
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
      {/* j'utilise les coponent de button pour mon bouton */}
      <button onClick={() => setIsChatVisible(!isChatVisible)} className="chatbot-toggle-btn">
        {isChatVisible ? 'X' : 'Chat'}
      </button>
    </div>
  );
}

export default Chatbot;
