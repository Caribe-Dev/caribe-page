const google = require('@googleapis/calendar');

const THIRTY_DAYS = 30

const EXCLUSE_EVENTS = {
  DRAFT: '[draft]',
  TENTATIVE: '[tentative]'
}

export async function getEventsFromCalendar() {
  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_KEY
  })

  const timeMin = new Date(new Date().setUTCHours(0, 0, 0, 0))
  const timeMax = new Date(timeMin)

  timeMax.setDate(timeMin.getDate() + THIRTY_DAYS);

  const res = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
    orderBy: 'startTime',
    singleEvents: true
  })

  const events = res.data.items || []

  const confirmedEvents = events.filter((item) => {
    const title = item.summary.toLowerCase()

    if (title.includes(EXCLUSE_EVENTS.DRAFT) || title.includes(EXCLUSE_EVENTS.TENTATIVE)) {
      return false
    }

    return true
  })

  return confirmedEvents.map((item) => {
    return {
      id: item.id,
      created: item.created,
      title: item.summary,
      description: item.description || '',
      location: item?.location || null,
      startAt: item.start,
      endAt: item.end
    }
  });
}

