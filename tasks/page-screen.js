const puppeteer = require('puppeteer')
const pathResolver = require('../utility/pathResolver')

const pageScreenshot = async (settings) => {
	const {headless, resolution, website} = settings
	const time = Date.now()
	const browser = await puppeteer.launch({headless})
	const page = await browser.newPage()
	const options = {
		path: `${pathResolver('screenshots')}${time}_${website.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9]))?\./g)}png`
	}

	await page.setViewport(Object.assign({deviceScaleFactor: 1}, resolution))
	console.log(`Go to ${website}`)
	await page.goto(website)
	await page.screenshot(options)
	console.log(`Screenshot has been saved in ${options.path}`)
	await browser.close()
	// eslint-disable-next-line no-console
	console.log(`Task finished in: ${(Date.now() - time)/1000} sec`)
}

module.exports = pageScreenshot