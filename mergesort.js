const merge = {};

merge.split = function(array){
	if (array.length < 2) {
		return array;
	} else {
	var result = [];
	result.push(	array.slice(0, Math.ceil(array.length/2))	)	
	result.push(	array.slice(Math.ceil(array.length/2))	); 
	return result
	}
}

merge.combine = function(array){
	var result = [];

	//don't shift version
	var left = array[0],
	right = array[1],

	leftIdx = 0,
	rightIdx = 0;

	while (leftIdx < left.length && rightIdx < right.length){
		if (left[leftIdx] < right[rightIdx]){
			result.push(left[leftIdx])
			leftIdx++
		}
		else{
			result.push(right[rightIdx])
			rightIdx++
		}
	}

	for (; leftIdx < left.length; leftIdx++) result.push(left[leftIdx])
	for (; rightIdx < right.length; rightIdx++) result.push(right[rightIdx])
	//end don't shift version



	// O(n^2) version, sad face

	// while (array[0][0] && array[1][0]){		
	// 	if (array[0][0] > array[1][0]){
	// 		result.push(array[1].shift());
	// 	} else {
	// 		result.push(array[0].shift())
	// 	}
	// }
	// while (array[0][0]){
	// 	result.push(array[0].shift())
	// } 
	// while (array[1][0]){
	// 	result.push(array[1].shift())
	// }

	//end slow version

	return result;

}

merge.sort = function(array){
	if (array.length < 2) return array;
	var splitArr = this.split(array),
	left = splitArr[0],
	right = splitArr[1]
	return this.combine(	[this.sort(left), this.sort(right)]	)
}