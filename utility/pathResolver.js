const fs = require('fs')

const pathResolver = path => {
	try {
		if (!fs.existsSync(path)){
			fs.mkdirSync(path)
		}
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err)
	}
	return `${path}/`
}

module.exports = pathResolver