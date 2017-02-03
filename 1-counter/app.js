(function(){
	'use-strict';

	// ENTER YOUR CODE HERE

	var decr = document.getElementsByClassName('decrement'); //is giving me a list (HTMLCollection)
	var incr = document.getElementsByClassName('increment');

	decr[0].addEventListener('click', function(){
	 	var newOutput = document.getElementsByClassName('output');
		//console.log(newOutput[0].innerHTML--);
		newOutput[0].innerHTML--; // .innerHTML only for single elements - no HTMLCollection
	});

	incr[0].addEventListener('click', function(){
		var newOutput =  document.getElementsByClassName('output');
		newOutput[0].innerHTML++;
	});
})();
