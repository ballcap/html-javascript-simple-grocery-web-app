var arr = [];
var add = () => {
	x = document.getElementById("txt");
	if(x.value == "" || x.value == " ") {}
	else {
		arr.push(x.value);
		alert("Item added");
	}
	x.value = "";
}
var show = () => {
	var out = "";
	y = document.getElementById("result");
	
	for(var i = 0; i < arr.length; i++) {
		out += arr[i] + "<br />";
	}
	y.innerHTML = out;
}