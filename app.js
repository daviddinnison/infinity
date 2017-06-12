function beyond(num) {
	if(num === 0) {
		console.log('Staying home');
	} else if(isFinite(num) === true && num >0) {
		console.log('To infinity');
	} else if(num < 0 && isFinite(num) === true) {
		console.log('To negative infinity');
	} else if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
		console.log('And beyond');
	}
}

beyond();


// function beyond(num) {
// 	if(num === 0) {
// 		console.log('Staying home');
// 	} else if((num  === Number.isFinite(num) & (num > 0)) {
// 		console.log('To infinity');
// 	} else if(num < 0) {
// 		console.log('To negative infinity');
// 	} else if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
// 		console.log('And beyond');
// 	}
// }

// beyond(1);