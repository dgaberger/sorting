const bubble = {}

bubble.swap = function(arr, swapIndex){
	var holder = arr[swapIndex]
	arr[swapIndex] = arr[swapIndex + 1]
	arr[swapIndex + 1] = holder
}

bubble.sort = function(arr){
	this.arr = arr
	if (this.arr.length < 2){
		return this.arr;
	}
	var isSorted = false
	var max = 0
	while (!isSorted && max < 400){
		isSorted = true
		for (i = 0; i < this.arr.length - 1; i++){
			if (this.arr[i] > this.arr[i +1 ]){
				isSorted = false
				bubble.swap(this.arr, i)
			}
		}
		max ++
	}
	return arr



}