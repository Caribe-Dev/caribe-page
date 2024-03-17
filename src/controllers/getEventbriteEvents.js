import * as cheerio from 'cheerio';

import { getHtmlDoc } from '../utils';

const documentQuery = `div[data-testid="organizer-profile__future-events"][class=""]`

export const getEventbriteEvents = async () => {
  const urls = [
    'https://www.eventbrite.co/o/barranquillajs-67217601443',
    "https://www.eventbrite.co/o/comunidad-linuxbq-72989806003"
  ];
  const posts = [];

  for (let index = 0; index < urls.length; index++) {
    const currentUrl = urls[index];
    const html = await getHtmlDoc(currentUrl);
    const $ = cheerio.load(html);

    $(documentQuery).each((_, el) => {
      const name = $(el).find(`section h2`).first().text();
      const date = $(el).find(`section p:nth-child(2)`).first().text();
      const link = $(el).find('a').attr('href');
      const place = "" // server is not sending this info

      posts.push({ name, link, date, place });
    });
  }
  return posts;
};