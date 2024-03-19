export const getDiscordEvents = async () => {
  const dayInSeconds = 86400
  const data = await fetch(`https://discord.com/api/guilds/${process.env.NEXT_DISCORD_SERVER_ID}/scheduled-events`, {
    headers: {
      "Authorization": `Bot ${process.env.NEXT_DISCORD_PUBLIC_KEY}`
    },
    next: { revalidate: dayInSeconds },
  })
  const response = await data.json()
  return response
}