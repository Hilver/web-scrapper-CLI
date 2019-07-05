const puppeteer = require('puppeteer')
const pathResolver = require('../utility/pathResolver')

const pageToPdf = async (settings) => {
	const {headless, website} = settings
	const time = Date.now()
	const browser = await puppeteer.launch({headless})
	const page = await browser.newPage()
	const options = {
		path: `${pathResolver('pdf_files')}${time}_${website.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9]))?\./g)}pdf`,
		format: 'A4'
	}
	await page.setViewport(Object.assign({deviceScaleFactor: 1}, {width: 1920, height: 1080}))
	console.log(`Go to ${website}`)
	await page.goto(website)
	await page.pdf(options)
	console.log(`PDF has been saved in /${options.path}`)
	await browser.close()
	// eslint-disable-next-line no-console
	console.info(`Task finished in: ${(Date.now() - time)/1000} sec`)
}

module.exports = pageToPdf