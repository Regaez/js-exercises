(function(){
	'use-strict';

	// ENTER YOUR CODE HERE

 	var str = document.querySelector('input').value;

	//console.log(str);
	var newStr = '';

	for(var i = str.size-1; i >= 0; i--){
		newStr += str[i];
		console.log(newStr);
	}

	document.querySelector('output').value = newStr;


})();
