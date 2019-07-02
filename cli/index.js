const prompts = require('prompts')
const screenScrapper = require('../pageScreenshot')

const main = async () => {

    const response = await (async () => {

        return prompts([{
            type: 'text',
            message: 'Which site you want to scrap?',
            name: 'website'
        }])
    })()

    const {website} = response
    screenScrapper(website)    
}

main()

module.exports = main