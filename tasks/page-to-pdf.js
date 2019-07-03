const puppeteer = require('puppeteer')
const pathResolver = require('../utility/pathResolver')

const pageToPdf = async (website) => {
	const time = Date.now()
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	const options = {
		path: `${pathResolver('pdf_files')}${time}_${website.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9]))?\./g)}pdf`,
		format: 'A4'
	}
	await page.goto(website)
	await page.pdf(options)

	await browser.close()
	// eslint-disable-next-line no-console
	console.log(`Time of executing task is: ${(Date.now() - time)/1000} sec.`)
}

module.exports = pageToPdf