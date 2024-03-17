const placeholderMessage = "Solo los asistentes pueden ver el enlace"

export const getPlaceName = (place) => {
  if (place.includes(placeholderMessage)) return 'Evento en línea';
  return place
}

export const getHtmlDoc = async (url) => {
  const response = await fetch(url);
  const html = await response.text();
  return html;
};

export const getLinkFromText = (text) => {
  const regexUrl = /https?:\/\/\S+/gi;
  const found = text.match(regexUrl);

  if (found) return found[0]
  return null
}

export const extractGdgNumbers = (text) => text.match(/\d+/g)