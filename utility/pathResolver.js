const fs = require('fs')

const pathResolver = path => {
	try {
		if (!fs.existsSync(path)){
			fs.mkdirSync(path)
		}
	} catch (err) {
		console.error(err)
	}
	return path
}

module.exports = pathResolver