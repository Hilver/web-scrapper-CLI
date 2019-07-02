const puppeteer = require('puppeteer');

const pageScreenshot = async (website) => {
  const time = Date.now()
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(website);
  await page.screenshot({path: `${website.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9]))?\./g)}png`, width: '1200px'});
//   await page.pdf({path: 'filmweb.pdf', format: 'A4'});

  await browser.close();
  console.log(`Time of executing task is: ${(Date.now() - time)/1000} sec.`)
}

module.exports = pageScreenshot