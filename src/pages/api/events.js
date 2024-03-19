import { getGdgEvents } from "@/controllers/getGdgEvents";
import { getMeetupEvents } from "@/controllers/getMeetupEvents";
import { getDiscordEvents } from "@/controllers/getDiscordEvents";
import { getEventbriteEvents } from "@/controllers/getEventbriteEvents";

const getEvents = async (_, res) => {
  const gdgEvents = await getGdgEvents()
  const eventbriteEvents = await getEventbriteEvents()
  const meetupEvents = await getMeetupEvents()
  const events = await getDiscordEvents()
  const discordEvents = events?.length ? events : []

  const returnableEvents = [...meetupEvents, ...eventbriteEvents, ...gdgEvents, ...discordEvents]

  res.status(200).json({ events: returnableEvents })
}

export default getEvents