export const getEvents = async () => {
  const data  = await fetch(`https://discord.com/api/guilds/${process.env.NEXT_DISCORD_SERVER_ID}/scheduled-events`, {
    headers: {
      "Authorization": `Bot ${process.env.NEXT_DISCORD_PUBLIC_KEY}`
    }
  })
  const response = await data.json()
  return response
}