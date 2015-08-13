window.onload = function(){

	var taglist  = document.getElementById('test');
	var taglist2 = document.getElementById('test2');

	var test  = new ZTAGS(taglist,  ["Yolo!", "with", "style!"]);
	var test2 = new ZTAGS(taglist2, ["Read", "only!"], true);

	var getTags = document.getElementById('get-tags');
	getTags.addEventListener('click', function(){

		alert( JSON.stringify( test.get() ) );

	})

};