const puppeteer = require('puppeteer')
const pathResolver = require('../utility/pathResolver')

const pageScreenshot = async (website) => {
	const time = Date.now()
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	const options = {
		path: `${pathResolver('screenshots')}${time}_${website.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9]))?\./g)}png`
	}
	await page.goto(website)
	await page.screenshot(options)

	await browser.close()
	// eslint-disable-next-line no-console
	console.log(`Time of executing task is: ${(Date.now() - time)/1000} sec.`)
}

module.exports = pageScreenshot