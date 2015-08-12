var ZTAGS = function (el, predefined){

	// args
	// this.tags = [];
	this.el = el;
	this.predefined = predefined;

	// meths
	this.init()

}




ZTAGS.prototype.init = function(){

	var that = this;

	// adds the predefined tags
	for(var i=0; i < that.predefined.length; i++){
		that.add(that.predefined[i])
	}

}

ZTAGS.prototype.add = function(theTagToAdd){

	var that = this;

	// create the tag Dom obect
	var tagWrapper = document.createElement("div");
	var tagLabel = document.createElement("span");
	var tagName = document.createTextNode(theTagToAdd);
	tagWrapper.className = "z-tag";
	tagLabel.className = "z-tag-label"
	tagLabel.appendChild(tagName);
	tagWrapper.appendChild(tagLabel);

	// add it the deletion btn
	var deleteBtn = document.createElement("span");
	var deleteLabel = document.createTextNode("X");
	deleteBtn.className = "z-tag-delete-btn";
	deleteBtn.appendChild(deleteLabel);
	tagWrapper.appendChild(deleteBtn);
	// event listener
	deleteBtn.addEventListener('click', function(){
		that.delete(tagWrapper);
	})

	// add it to the DOM
	that.el.appendChild(tagWrapper);

}

ZTAGS.prototype.delete = function(theTagToDelete){

	var that = this;

	// delete the element
	theTagToDelete.parentNode.removeChild(theTagToDelete);

}


ZTAGS.prototype.get = function(){

	var that = this;
	var tags = [];

	for (var i=0; i<that.el.childNodes.length; i++){

		var tag = that.el.childNodes[i];
		console.log(tag)
		var tagName = tag.getElementsByClassName('z-tag-label')[0].innerHTML;
		tags.push(tagName)

	}

	return tags;
	
}


