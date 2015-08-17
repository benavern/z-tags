window.onload = function(){

// demo
	var taglist  = document.getElementById('test');
	var test  = new ZTAGS({
			element: taglist, 
			options:{
				predefined:["Yolo!", "with", "style!"],
				readonly: false,
				pattern: false,
				color: "#6677CC"
			}
		});

	var getTags = document.getElementById('get-tags');
	getTags.addEventListener('click', function(){

		alert( JSON.stringify( test.get(), null, '  ') );

	})

// readonly
	var taglist2 = document.getElementById('test2');
	var test2 = new ZTAGS({ 
			element: taglist2, 
			options:{
				predefined: ["Read", "only!"], 
				readonly: true
			}
		});
	
	
// pattern limited
	var taglist3 = document.getElementById('test3');
	var fruits = ["apple", "cherry", "lemon"];
	var test3 = new ZTAGS({
			element: taglist3, 
			options:{
				predefined: ["apple", "cherry"], 
				pattern: fruits
			}
		});


	// external calls
	var taglist4 = document.getElementById('test4');
	var test4 = new ZTAGS({
			element: taglist4, 
			options:{
				predefined: ["external", "calls"]
			}
		});
	var addto4 = document.getElementById('addto4');
	addto4.addEventListener("click", function(){
		test4.add("addedExternally");
	})
	var removefrom4 = document.getElementById('removefrom4');
	removefrom4.addEventListener("click", function(){
		test4.delete("addedExternally");
	})

	// colors
	var taglist5 = document.getElementById('test5');
	var test5 = new ZTAGS({
			element: taglist5, 
			options:{
				predefined: ["named", "color"],
				color: "red"
			}
		});
	var taglist6 = document.getElementById('test6');
	var test6 = new ZTAGS({
			element: taglist6, 
			options:{
				predefined: ["rgb", "color"],
				color: "rgb(50, 200, 50)"
			}
		});
	var taglist7 = document.getElementById('test7');
	var test7 = new ZTAGS({
			element: taglist7, 
			options:{
				predefined: ["exa", "color"],
				color: "#3355DD"
			}
		});
	






};