const merge = {};

merge.split = function(array){
	this.array = array;
	var length = this.array.length;
	if (length < 2) {
		return this.array;
	}
	var result = [];
	result.push(	this.array.slice(0, Math.ceil(length/2))	)	
	result.push(	this.array.slice(Math.ceil(length/2))	); 
	return result;
}

merge.combine = function(array){
	this.array = array;
	var result = [];
	// if(this.array.length < 2){		//handles trivial case
	// 	return this.array;
	// }


}