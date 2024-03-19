export const getAllEvents = async () => {
  const data = await fetch("/api/events")
  const response = await data.json()
  return response?.events
}