'use client';

import daygridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

import CalenderSelector from '../forms/CalenderSelector';

// import Calendar from "react-calendar";

function CalenderSm() {
  return (
    <div className="dark:bg-darkblack-600 w-full rounded-lg bg-white p-5 lg:w-1/2 2xl:w-full">
      <div className="w-full">
        <p className="text-bgray-900 mb-5 text-lg font-semibold dark:text-white">
          Select Date
        </p>
        <CalenderSelector />
        <div className="min-calender">
          <FullCalendar
            selectable={true}
            plugins={[daygridPlugin]}
            views={['dayGridDay']}
            headerToolbar={{
              start: '',
              center: '',
              end: '',
            }}
            initialDate={new Date()} // using new Date(); and set your scheduled on event array
            businessHours={true} // display business hours
            editable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default CalenderSm;
