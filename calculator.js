var o=document.getElementById('output');
function common(num){
	o.value =o.value+num;
}
function equal(){
	try{
	o.value=eval(o.value)	
	}
	catch(err){
		alert('Invalid expression');
	}
}
function dele(){
	o.value=o.value.slice(0,-1);
}
function clr(){
	o.value='';
}