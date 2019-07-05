const puppeteer = require('puppeteer')
const delay = require('../utility/delay')

const pajacykClick = async (settings) => {
	const {headless} = settings
	const time = Date.now()
	const website = 'https://www.pajacyk.pl'
	const browser = await puppeteer.launch({headless})
	const page = await browser.newPage()

	await page.setViewport(Object.assign({deviceScaleFactor: 1}, {width: 1920, height: 1080}))

	console.log(`Go to ${website}`)
	await page.goto(website, {waitUntil: 'load'})
	await page.click('.paj-click')
	console.log('Clicked!')

	await delay(2000)
	const clickAmount = await page.$eval('.kliki', e => e.innerHTML)

	console.log(`Great job! You are ${clickAmount} person who have helped today!`)
	await browser.close()

	console.info(`Task finished in: ${(Date.now() - time)/1000} sec`)
}

module.exports = pajacykClick