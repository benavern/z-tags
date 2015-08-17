var ZTAGS = function (args){

	// args
	this.element = args.element;
	this.options = args.options;
	// predefined / readonly / pattern / color

	this.listSection;
	this.addSection;

	this.tags = [];

	// meths calls
	this.init();

}




ZTAGS.prototype.init = function(){

	var that = this;

	// for the styling css script
	that.element.className += " z-tags-style";

	// readonly;
	if(that.options.readonly !== true){
		that.options.readonly = false;
	}

	// patern
	if (!Array.isArray(that.options.pattern)){
		that.options.pattern = false;
	}

	// list section
	that.listSection = document.createElement("div");
	that.listSection.className = "list-section";
	that.element.appendChild(that.listSection);

	if (that.options.readonly === false){
		// add section
		that.addSection = document.createElement("input");
		that.addSection.className = "add-section";
		that.element.appendChild(that.addSection);

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
		that.element.addEventListener('click', function(e){
			if (e.target == this) { 
				that.addSection.focus();
			}
		})

	}

	// init with predefined
	that.redraw(that.options.predefined);

}

ZTAGS.prototype.add = function(theTagToAdd){

	var that = this;

	// if there is a pattern and the word doesn't match
	if(that.options.pattern !== false && that.options.pattern.indexOf(theTagToAdd) == -1 ){
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

		if(that.options.readonly === false){
			// add it the deletion btn
			var deleteBtn = document.createElement("span");
			var deleteLabel = document.createTextNode("X");
			deleteBtn.className = "tag-delete-btn";
			deleteBtn.appendChild(deleteLabel);
			tagWrapper.appendChild(deleteBtn);
			// event listener
			deleteBtn.addEventListener('click', function(){
				that.delete(theTagToAdd);
			})
		}

		if (!!that.options.color){
			tagWrapper.style.background = that.options.color;
		}

		// add it to the DOM
		that.listSection.appendChild(tagWrapper);

		// //add it to the Array
		that.tags.push(theTagToAdd)

	}
}

ZTAGS.prototype.redraw = function(newTagsArray){
	
	var that = this;

	// empty the dom
	while(that.listSection.firstChild){
  		that.listSection.removeChild(that.listSection.firstChild);
	}

	// empty the tags array
	that.tags = [];

	for (var i=0; i<newTagsArray.length; i++){
		that.add(newTagsArray[i]);
	}

	
}

ZTAGS.prototype.delete = function(theTagToDelete){

	var that = this;

	var newTagsArray = [];
	// delete the items
	for (var i=0; i< that.tags.length; i++){
		if(that.tags[i] !== theTagToDelete){
			newTagsArray.push(that.tags[i]);
		}
	}

	// redraw the tags area
	that.redraw(newTagsArray);
	
}


ZTAGS.prototype.get = function(){
	return this.tags;
}
