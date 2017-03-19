(function(){
	'use-strict';

	// ENTER YOUR CODE HERE

	var colors = ['#6495ED', '#F08080', '#66CDAA', '#DDA0DD'];

	/*body.addEventListener('load', setIntervall(){
			function(){
				body.style.backgroundColor = colors[Math.floor(colors.length * Math.random())];
			}, 500);
	});*/

	var x = setInterval(function(){
		document.body.style.backgroundColor = colors[Math.floor(colors.length * Math.random())];
	}, 500);
})();
