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
	this.array = array;
	var result = [];
	while (array[0][0] && array[1][0]){
		if (array[0][0] > array[1][0]){
			result.push(array[1].shift());
		} else {
			result.push(array[0].shift())
		}
	}
	while (array[0][0]){
		result.push(array[0].shift())
	} 
	while (array[1][0]){
		result.push(array[1].shift())
	}
	return result;

}

merge.sort = function(array){
	if (array.length < 2) return array;
	var splitArr = this.split(array)
	var left = splitArr[0]
	var right = splitArr[1]
	return this.combine(	[this.sort(left), this.sort(right)]	)
}