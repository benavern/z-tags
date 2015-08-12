var ZTAGS = function (obj, predefined){

	// args
	this.tags = [];
	this.obj = obj;
	this.predefined = predefined;

	// meths
	this.init()
}


ZTAGS.prototype.init = function(){

	var that = this;
	for(var i=0; i < that.predefined.length; i++){
	that.add(that.predefined[i])
	}

}

ZTAGS.prototype.add = function(theTagToAdd){

	var that = this;
	console.log("someone wants to add \"" + theTagToAdd + "\" to the tags list");

	var tagWrapper = document.createElement("div");
	var tagName = document.createTextNode(theTagToAdd);
	tagWrapper.appendChild(tagName);
	that.obj.appendChild(tagWrapper);



}

ZTAGS.prototype.delete = function(theTagToDelete){

	var that = this;
	console.log("someone wants to delete \"" + theTagToAdd + "\" to the tags list")


}