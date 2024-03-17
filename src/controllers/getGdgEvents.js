import * as cheerio from 'cheerio';

import { getHtmlDoc, extractGdgNumbers } from '../utils';

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
      console.log($(el).find(`div[style*="font-size:14px;"] strong div`))
      const name = $(el).find(`div[style*="font-size:22px;"] div`).text();
      const date = extractGdgNumbers($(el).find(`div[style*="font-size:14px;"] strong div`).text()).join(',');
      const link = $(el).find('a').attr('href');
      const place = ""

      posts.push({ name, link, date, place });
    });
  }
  return posts;
};