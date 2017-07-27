describe('Merge Sort', function(){

  it('has a split function that splits to two halves, works with odds', function(){
    expect( merge.split([1,2,3,4]) ).toEqual( [[1,2],[3,4]] );
    expect( merge.split([1,2,3]) ).toEqual( [[1,2],[3]]);
  });

  it('has a combine function that combines two halves, works with odds', function(){
    console.log(merge.combine([[1,6],[2,4]]));
    expect( merge.combine([[1,6],[2,4]] )).toEqual([1,2,4,6]);
    expect( merge.combine([[1,3],[2]])).toEqual( [1,2,3]);
  });

  it('handles an empty array', function(){
    expect( merge.sort([]) ).toEqual( [] );
  });

  it('handles an array of length 1', function(){
    expect( merge.sort([3]) ).toEqual( [3] );
  });

  it('handles an array of length 2', function(){
    expect( merge.sort([3, 2]) ).toEqual( [2, 3] );
  });

  it('handles an already sorted array', function(){
    expect( merge.sort([3, 6]) ).toEqual( [3, 6] );
    expect( merge.sort([3, 6, 9]) ).toEqual( [3, 6, 9] );
  });

  it('sorts any array with or without duplicates', function(){
    expect( merge.sort([1,2,9,1,6,8]) ).toEqual( [1,1,2,6,8,9] );
    expect( merge.sort([1,2,9,7,6,8]) ).toEqual( [1,2,6,7,8,9] );
  });

	it('the correct amount of splits are called', function () {
		spyOn(merge, 'split').and.callThrough(); 
	  merge.sort([3,2,1]);
	  expect(merge.split.calls.count()).toEqual(2);
	});

  it('the correct amount of combines are called', function () {
    spyOn(merge, 'combine').and.callThrough(); 
    merge.sort([3,2,1,5,8,3,2]);
    expect(merge.combine.calls.count()).toEqual(6);
  });

});