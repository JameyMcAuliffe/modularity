"use strict"

const { randomInt } = require('./math')

module.exports.toDiceNotation = ({count, sides}) => {
	return `${count}d${sides}`
}

module.exports.roll = (notation) => {
	const [count, sides] = notation.split('d').map(num => + num)

	let total = 0
	for(let i = 0; i < count; i++) {
		total += randomInt(1, sides)
	}
	return total
}









// module.exports = {
// 	//accepts args 
// 	toDiceNotation: function(argsObj) {
// 		let count = argsObj.count
// 		let sides = argsObj.sides
// 		return `${count}d${sides}`
// 	},
// 	roll: function(dString) {
// 		let lower = count
// 		let upper = lower
// 		return math.randomInt(lower, upper)
// 	}
// }

//module.exports = { diceObj }
