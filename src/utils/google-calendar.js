const google = require('@googleapis/calendar');

const SIXTY_DAYS = 60

const EXCLUSE_EVENTS = {
  FIXED: '[fixed]',
  DRAFT: '[draft]',
  TENTATIVE: '[tentative]'
}

const prefixFixedLenght = EXCLUSE_EVENTS.FIXED.length

export async function getEventsFromCalendar() {
  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_KEY
  })

  const timeMin = new Date(new Date().setUTCHours(0, 0, 0, 0))
  const timeMax = new Date(timeMin)

  timeMax.setDate(timeMin.getDate() + SIXTY_DAYS);

  const res = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
    orderBy: 'startTime',
    singleEvents: true
  })

  const fixedEvents = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    timeMin: timeMin.toISOString(),
    orderBy: 'startTime',
    maxResults: 10,
    q: EXCLUSE_EVENTS.FIXED,
    singleEvents: true
  })

  const events = [...res.data.items, ...fixedEvents.data.items].sort((a, b) => {
    const dateA = new Date(a.start.date);
    const dateB = new Date(b.start.date);
    return dateA - dateB;
  })

  const confirmedEvents = events.filter((item) => {
    const title = item.summary.toLowerCase()

    if (title.includes(EXCLUSE_EVENTS.DRAFT) || title.includes(EXCLUSE_EVENTS.TENTATIVE)) {
      return false
    }

    return true
  })

  return confirmedEvents.map((item) => {
    let summary = item.summary.trim().toLowerCase()

    if (summary.includes(EXCLUSE_EVENTS.FIXED)) {
      summary = summary.replace(EXCLUSE_EVENTS.FIXED, '').trim()
      summary = item.summary.substring(summary.length - prefixFixedLenght)
    }

    return {
      id: item.id,
      created: item.created,
      title: summary,
      description: item.description || '',
      location: item?.location || null,
      startAt: item.start || item.start,
      endAt: item.end
    }
  });
}

