export const getLinkFromText = (text) => {
  const regexUrl = /https?:\/\/\S+/gi;
  const found = text.match(regexUrl);

  if (found) return found[0]
  return null
}