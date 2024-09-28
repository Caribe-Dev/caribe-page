import { es } from 'date-fns/locale';
import { format } from 'date-fns';

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
  const regexUrl = /(https?:\/\/[^\s"']+)|href="([^"]+)"/i;
  const found = text.match(regexUrl);

  return found ? found[1] || found[2] : null;
}

export const extractGdgNumbers = (text) => text.match(/\d+/g)

export const formatGdgDate = (date) => {
  const [year, month, day] = date;
  const numericMonth = parseInt(month) - 1;
  const dateObject = new Date(year, numericMonth, day)

  return formatDefaultDateNoHour(dateObject)
}

export const formatDefaultDate = (date) => format(date, 'MMMM dd, yyyy - h:mm aa', { locale: es });

export const formatDefaultDateNoHour = (date) => format(date, 'MMMM dd, yyyy', { locale: es });