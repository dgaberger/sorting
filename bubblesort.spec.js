describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubble.sort([]) ).toEqual( [] );
  });

  it('handles an array of length 1', function(){
    expect( bubble.sort([3]) ).toEqual( [3] );
  });

  it('handles an already sorted array', function(){
    expect( bubble.sort([3, 6]) ).toEqual( [3, 6] );
    expect( bubble.sort([3, 6, 9]) ).toEqual( [3, 6, 9] );
  });

  it('sorts any array with or without duplicates', function(){
    expect( bubble.sort([1,2,9,1,6,8]) ).toEqual( [1,1,2,6,8,9] );
    expect( bubble.sort([1,2,9,7,6,8]) ).toEqual( [1,2,6,7,8,9] );
  });

 //  before(function () {
	//   spyOn(bubble, 'swap').and.callThrough(); 
	// });
	it('the correct amount of swaps are called', function () {
		spyOn(bubble, 'swap').and.callThrough(); 
	  bubble.sort([3,2,1]);
	  expect(bubble.swap.calls.count()).toEqual(3);
	});

});
