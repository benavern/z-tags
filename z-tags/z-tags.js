var ZTAGS = function (el, predefined, readonly, pattern){

	// args
	this.el = el;
	this.predefined = predefined;
	this.readonly = readonly;
	this.pattern = pattern;

	this.listSection;
	this.addSection;

	// meths calls
	this.init();

}




ZTAGS.prototype.init = function(){

	var that = this;

	// for the styling css script
	that.el.className += " z-tags-style";

	// readonly;
	if(that.readonly !== true){
		that.readonly = false;
	}

	// patern
	if (!Array.isArray(that.pattern)){
		that.pattern = false;
	}

	// list section
	that.listSection = document.createElement("div");
	that.listSection.className = "list-section";
	that.el.appendChild(that.listSection);

	if (that.readonly === false){
		// add section
		that.addSection = document.createElement("input");
		that.addSection.className = "add-section";
		that.el.appendChild(that.addSection);

		// key actions
		that.addSection.addEventListener('keydown', function (e) {

			var key = e.which || e.keyCode;
			if (key === 13 || key === 32 || key == 44 || key == 188 ) { // if enter, space or coma
				e.preventDefault();
				var newTag = that.addSection.value;
				if(newTag.length != 0){
					that.add(newTag);
					that.addSection.value = "";
				}
			}
			else if(key === 27){
				// escape = blur
				that.addSection.blur();
				return false;
			}
		});

		// display it?
		that.el.addEventListener('click', function(e){
			if (e.target == this) { 
				that.addSection.focus();
			}
		})

	}

	// adds the predefined tags
	for(var i=0; i < that.predefined.length; i++){
		that.add(that.predefined[i]);
	}

}

ZTAGS.prototype.add = function(theTagToAdd){

	var that = this;
	
	// if there is a pattern and the word doesn't match
	if(that.pattern !== false && that.pattern.indexOf(theTagToAdd) == -1 ){
		return ;
	}
	else{

		// create the tag Dom obect
		var tagWrapper = document.createElement("div");
		var tagLabel = document.createElement("span");
		var tagName = document.createTextNode(theTagToAdd);
		tagWrapper.className = "tag-wrapper";
		tagLabel.className = "tag-label";
		tagLabel.appendChild(tagName);
		tagWrapper.appendChild(tagLabel);

		if(that.readonly === false){
			// add it the deletion btn
			var deleteBtn = document.createElement("span");
			var deleteLabel = document.createTextNode("X");
			deleteBtn.className = "tag-delete-btn";
			deleteBtn.appendChild(deleteLabel);
			tagWrapper.appendChild(deleteBtn);
			// event listener
			deleteBtn.addEventListener('click', function(){
				that.delete(tagWrapper);
			})
		}

		// add it to the DOM
		that.listSection.appendChild(tagWrapper);

	}
}

ZTAGS.prototype.delete = function(theTagToDelete){

	var that = this;

	// delete the element
	theTagToDelete.parentNode.removeChild(theTagToDelete);
}


ZTAGS.prototype.get = function(){

	var that = this;
	var tags = [];

	for (var i=0; i<that.listSection.childNodes.length; i++){
		var tag = that.listSection.childNodes[i];
		var tagName = tag.getElementsByClassName('tag-label')[0].innerHTML;
		tags.push(tagName);
	}

	return tags;
}
