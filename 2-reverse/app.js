(function(){
	'use-strict';

	// ENTER YOUR CODE HERE

	var str = document.querySelector('.input');
	str.addEventListener('input', function(){
		document.querySelector('.output').innerHTML = str.value.split('').reverse().join('');
	})


})();
