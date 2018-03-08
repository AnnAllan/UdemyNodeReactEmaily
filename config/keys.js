// keys.js - figure out credentials to return
if (prosess.env.NODE_ENV === 'production') {
	// return prod keys
	module.exports = require('./prod');
} else {
	// return dev keys
	module.exports = require('./dev');
}
