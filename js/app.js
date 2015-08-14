window.onload = function(){


	var taglist  = document.getElementById('test');
	var test  = new ZTAGS({element: taglist, predefined : ["Yolo!", "with", "style!"]});

	var getTags = document.getElementById('get-tags');
	getTags.addEventListener('click', function(){

		alert( JSON.stringify( test.get() ) );

	})


	var taglist2 = document.getElementById('test2');
	var test2 = new ZTAGS({ element: taglist2, predefined: ["Read", "only!"], readonly: true});
	

	var taglist3 = document.getElementById('test3');
	var fruits = ["apple", "cherry", "lemon"];
	var test3 = new ZTAGS({element: taglist3, predefined: ["apple", "cherry"], pattern: fruits});


};