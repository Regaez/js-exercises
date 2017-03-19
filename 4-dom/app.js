(function(){
	'use-strict';

	var shoppingList = [ "eggs", "butter", "milk", "steak", "chicken", "gummy bears", "chocolate", "ice cream", "juice", "broccoli", "carrots", "crackers"];

	// ENTER YOUR CODE HERE
	var bulletedList = document.createElement("ul");
	//var listElem = document.createElement("li");
	//var elems = document.createTextNode(shoppingList);
	//console.log(elems);


	document.querySelector(".output").appendChild(bulletedList);

	for(var i=0; i<shoppingList.length; i++){
		var listElem = document.createElement("li");
		bulletedList.appendChild(listElem).appendChild(document.createTextNode(shoppingList[i]));
	}

	for(var i=0; i<shoppingList.length; i++){
		var listElem = document.createElement("input");
		var attr = document.createAttribute("type");
		var br = document.createElement("br");

		attr.value = "checkbox";
		listElem.setAttributeNode(attr);
	 	bulletedList.appendChild(br).appendChild(listElem).appendChild(document.createTextNode(shoppingList[i]));

	}



})();
