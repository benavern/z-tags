window.onload = function(){

	var taglist = document.getElementById('test');
	var test = new ZTAGS(taglist, ["I'm", "not", "Styled..."]);

	var taglist = document.getElementById('test2');
	var test2 = new ZTAGS(taglist, ["Yolo!", "with", "style!"]);


	
	var addTag = document.getElementById('add-tag');
	addTag.addEventListener('submit', function(e){

		e.preventDefault();

		var newTag = document.getElementById('new-tag').value;
		test2.add(newTag);

	})

	var getTags = document.getElementById('get-tags');
	getTags.addEventListener('click', function(){

		console.log(test2.get());

	})



};