"use strict"



module.exports = (args) => {

	let count, sides

	switch(args.length) {
		case 1:
			count = 1
			sides = args[0]
			break
		case 2:
			count = args[0]
			sides = args[1]
			break
		default:
			count = 1
			sides = 6
	}

	return {
		count,
		sides
	}
}

// console.log(module.exports([]))
// console.log(module.exports([8]))
// console.log(module.exports([2, 10]))

/*************************************************************/

// module.exports = function(args) {
// 	//const [,,...cliArgs] = process.argv
// 	let argsObj = {
// 		count: 0,
// 		sides: 0
// 	}
// 	//array to hold args
// 	let argsArray = Array.from(args)
// 	//no args
// 	if (argsArray.length === 0) {
// 		argsObj.sides = 6
// 	} //1 arg
// 	else if (argsArray.length === 1) {
// 		argsObj.sides = argsArray[0]
// 	} //2 args
// 	else {
// 		argsObj.count = argsArray[0]
// 		argsObj.sides = argsArray[1]
// 	}
// 	return argsObj
// }


