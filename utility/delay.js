const delay = (ms) => {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(true)
		},ms)
	})
}

module.exports = delay