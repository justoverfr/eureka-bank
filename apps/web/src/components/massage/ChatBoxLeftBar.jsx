import AllMessages from './AllMessages';
import PinnedMassages from './PinnedMassages';
import SidebarHeader from './SidebarHeader';

function ChatBoxLeftBar() {
  return (
    <aside className="dark:bg-darkblack-600 border-bgray-200 dark:border-darkblack-400 hidden h-full border bg-white pb-10 pl-12 pr-7 pt-6 lg:col-span-5 lg:block xl:col-span-4 2xl:col-span-3">
      <SidebarHeader />
      <div className="pt-6">
        {/* Pinned Message  */}
        <PinnedMassages />
        {/* All Message  */}

        <AllMessages />
      </div>
    </aside>
  );
}

export default ChatBoxLeftBar;
