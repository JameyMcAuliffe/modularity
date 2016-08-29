"use strict"


module.exports.randomInt = (lower, upper) => {
	return Math.floor(Math.random() * (upper - lower + 1) + lower)
}

//console.log(module.exports.randomInt(2, 10))




//object with function returning random integer, function is inclusive
// let mathObj = {
// 	randomInt: function(lower, upper) {
// 		return parseInt(Math.floor(Math.random() * (upper - lower +1) + lower))
// 	}
// }

// module.exports = { mathObj }
