function beyond(num) {
	if(num === 0) {
		console.log('Staying home');
	} else if((num  === isFinite(num) & (num > 0)) {
		console.log('To infinity');
	} else if(num < 0) {
		console.log('To negative infinity');
	} else if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
		console.log('And beyond');
	}
}

beyond(1);