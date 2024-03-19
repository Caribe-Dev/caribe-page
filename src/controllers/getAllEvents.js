export const getAllEvents = async () => {
  const origin = window?.location?.href ? window.location.href : "https://caribedev.org/"
  const url = `${origin}api/events`
  const data = await fetch(url)
  const response = await data.json()
  return response?.events
}