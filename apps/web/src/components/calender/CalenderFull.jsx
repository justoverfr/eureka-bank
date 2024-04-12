'use client';

import { useState } from 'react';

import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

function CalenderFull() {
  const date = new Date();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const [events, setEvents] = useState([
    {
      title: 'Business',
      start: `2023-${month}-05T13:00:00.000Z`,
      constraint: 'businessHours',
      color: '#F5BA47',
      id: 1,
    },
    {
      title: 'Event',
      start: `2023-${month}-14T13:00:00.000Z`,
      constraint: 'businessHours',
      color: '#63C660',
      id: 2,
    },
    {
      title: 'Meeting',
      start: `2023-${month}-18T13:00:00`,
      constraint: 'availableForMeeting', // defined below
      color: '#936DFF',
      id: 3,
    },
    {
      title: 'Business',
      start: `2023-${month}-09T13:00:00`,
      constraint: 'businessHours',
      color: '#F5BA47',
      id: 4,
    },
    {
      title: 'Event',
      start: `2023-${month}-17T13:00:00`,
      constraint: 'businessHours',
      color: '#63C660',
      id: 5,
    },
    {
      title: 'Meeting',
      start: `2023-${month}-27T13:00:00`,
      constraint: 'availableForMeeting', // defined below
      color: '#936DFF',
      id: 6,
    },
  ]);

  const handleSelect = (info) => {
    const eventNamePrompt = prompt('Enter, event name');
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          ...info,
        },
      ]);
    }
  };
  return (
    <section className="mb-6 flex-1 2xl:mb-0">
      <div className="dark:bg-darkblack-600 w-full rounded-lg bg-white p-3 sm:px-10 sm:py-5">
        <div className="calender-wrapper relative h-full w-full">
          <div className="absolute left-0 top-2 w-full max-w-fit">
            <div className="flex items-center justify-between">
              <div className="calender-title">
                <h3 className="text-bgray-900 text-xl font-bold sm:text-2xl dark:text-white ">
                  Calender
                </h3>
              </div>
            </div>
          </div>
          <div className="dark:bg-darkblack-600 w-full rounded-lg bg-white lg:w-1/2 2xl:w-full ">
            <div className="w-full">
              <FullCalendar
                selectable
                select={handleSelect}
                plugins={[daygridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
                views={['dayGridDay', 'timeGridMonth', 'dayGridWeek']}
                headerToolbar={{
                  start: 'dayGridMonth timeGridWeek timeGridDay listMonth',
                  center: 'title',
                  end: 'prev next',
                }}
                initialDate={new Date()} // using new Date(); and set your scheduled on event array
                navLinks={true} // can click day/week names to navigate views
                businessHours={true} // display business hours
                editable={false}
                events={events}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalenderFull;
