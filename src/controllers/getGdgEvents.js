import * as cheerio from 'cheerio';

import { getHtmlDoc, extractGdgNumbers, formatGdgDate } from '@/utils';

const documentQuery = `div[style*="border-style:solid;border-width:1px;border-radius:12px;"]`

export const getGdgEvents = async () => {
  const urls = [
    'https://gdg.community.dev/gdg-barranquilla/'
  ];
  const posts = [];

  for (let index = 0; index < urls.length; index++) {
    const currentUrl = urls[index];
    const html = await getHtmlDoc(currentUrl);
    const $ = cheerio.load(html);

    $(documentQuery).each((_, el) => {
      const name = $(el).find(`div[style*="font-size:22px;"] div`).text();
      const date = formatGdgDate(extractGdgNumbers($(el).find(`div[style*="font-size:14px;"] strong div`).text()));
      const link = $(el).find('a').attr('href');
      const place = $(el).find(`div[style*="font-size:16px;"]`).text().split('*')[1] || ""

      posts.push({ name, link, date, place });
    });
  }
  return posts;
};