const prompts = require('prompts')
const taskDefinitions = require('../tasks')

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
				type: 'text',
				message: 'Which site you want to scrap?',
				name: 'website'
			}
		])
	})()

	const {task, website} = response
	const taskDefinition = taskDefinitions[task]

	try {
		await taskDefinition(website)
	}
	catch (error) {
		console.error(error)
	}
}

main()

module.exports = main