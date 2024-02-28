import * as cheerio from 'cheerio';

const documentQuery = `[id="submain"] ul li a[data-event-label][data-event-category][id]`
const placeholderMessage = "Solo los asistentes pueden ver el enlace"

export const getMeetupEvents = async () => {
  const urls = [
    'https://www.meetup.com/es/quillarb/',
    'https://www.meetup.com/es/ideaware-meetups/',
    'https://www.meetup.com/es-ES/hack-the-box-meetup-barranquilla-co/',
    'https://www.meetup.com/es/wordpress-barranquilla/',
    'https://www.meetup.com/es-ES/pythonbaq/',
    'https://www.meetup.com/es-ES/pionerasdev-baq/',
  ];
  const posts = [];

  for (let index = 0; index < urls.length; index++) {
    const currentUrl = urls[index];
    const html = await getHtmlDoc(currentUrl);
    const $ = cheerio.load(html);

    const results = $(documentQuery).filter((_, el) => {
      const isEventCard = $(el).attr('id').includes("event-card-e-")
      const hasTitle = $(el).find('div span.ds-font-title-3').text()?.length > 0
      return isEventCard && hasTitle
    })

    results.each((_, el) => {
      const name = $(el).find('div span.ds-font-title-3').text();
      const date = $(el).find('div time').text();
      const link = $(el).attr('href');
      const place = getPlaceName($(el).find('div span.text-gray6').text().split(',').slice(0, 2))

      posts.push({ name, link, date, place });
    });
  }
  return posts;
};

const getPlaceName = (place) => {
  if (place.includes(placeholderMessage)) return 'Evento en línea';
  return place
}

const getHtmlDoc = async (url) => {
  const response = await fetch(url);
  const html = await response.text();
  return html;
};