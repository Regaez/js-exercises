(function(){
	'use-strict';

	var shoppingList = [ "eggs", "butter", "milk", "steak", "chicken", "gummy bears", "chocolate", "ice cream", "juice", "broccoli", "carrots", "crackers"];

	// ENTER YOUR CODE HERE
	var bulletedList = document.createElement("ul");
	//var listElem = document.createElement("li");
	//var elems = document.createTextNode(shoppingList);
	//console.log(elems);

	function addAttribute(elem, key, value) {
		var attr = document.createAttribute(key);
		attr.value = value;
		elem.setAttributeNode(attr);
	};


	document.querySelector(".output").appendChild(bulletedList);

	for(var i=0; i<shoppingList.length; i++){
		var listElem = document.createElement("li");
		var listCheck = document.createElement("input");
		var lab = document.createElement("label");
		var text = document.createTextNode(shoppingList[i]);


		// var attrInputOne = document.createAttribute("type");
		// var attrInputTwo = document.createAttribute("id");
		// var attrLabel = document.createAttribute("for");
		// attrInputOne.value = "checkbox";
		// attrInputTwo.value = "cb" + [i];
		// attrLabel.value = attrInputTwo.value;

		// listCheck.setAttributeNode(attrInputOne);
		// listCheck.setAttributeNode(attrInputTwo);
		bulletedList.appendChild(listElem);

		addAttribute(listCheck, 'type', 'checkbox');
		addAttribute(listCheck, 'id', 'cb' + i);
		addAttribute(lab, 'for', 'cb' + i);

		// lab.setAttributeNode(attrLabel);
		listElem.appendChild(listCheck);
		listElem.appendChild(lab).appendChild(text);
	}

})();
