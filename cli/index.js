const prompts = require('prompts')
const taskDefinitions = require('../tasks')

const resolutions = {
	'Desktop': {
		width: 1920,
		height: 1080
	},
	'Tablet': {
		width: 800,
		height: 640
	},
	'Mobile': {
		width: 360,
		height: 640
	}
}

const main = async () => {

	const response = await (async () => {

		return prompts([
			{
				type: 'autocomplete',
				message: 'Which task do you want to run?',
				choices: Object.keys(taskDefinitions).map(task =>({title: task})),
				name: 'task'
			},
			{
				type: prev => prev == 'page-screen' ? 'autocomplete' : null,
				message: 'What resolution do you want to set?',
				choices: Object.keys(resolutions).map(resolution =>({title: resolution, value: resolutions[resolution]})),
				name: 'resolution'
			},
			{
				type: 'text',
				message: 'Which site you want to scrap?',
				name: 'website'
			},
			{
				type: (_, values) => values.task !== 'page-to-pdf' ? 'confirm' : null,
				message: 'Use headless browser mode?',
				initial: true,
				name: 'headless'
			}
		])
	})()

	const {headless, resolution, task, website} = response
	const taskDefinition = taskDefinitions[task]
	const options = {
		website,
		resolution,
		headless
	}

	try {
		await taskDefinition(options)
	}
	catch (error) {
		console.error(error)
	}
}

main()

module.exports = main