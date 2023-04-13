// $( document ).ready(function() {
    // $("input").keypress(function(){
// var result=$("dis").value;
// console.log(result);
	
// });
// });


var quantity =document.querySelector('#quantity');
var price =document.querySelector('#price');
var total =document.querySelector('#total');
price.addEventListener('keyup',function(){
	var result=quantity.value*price.value;
	total.value=result;
})