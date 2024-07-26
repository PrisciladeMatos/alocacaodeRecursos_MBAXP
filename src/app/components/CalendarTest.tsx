import * as React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

const events = [
  { title: 'Meeting', start: new Date() }
]

export default function CalendarTest() {
  return (
    <div>
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo: { timeText: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; event: { title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined } }) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}