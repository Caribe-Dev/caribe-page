export const getAllEvents = async () => {
  console.log("fetch")
  const data = await fetch("/api/events")
  const response = await data.json()
  return response?.events
}