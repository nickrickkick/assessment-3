console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
//	console.log('form submit');
	alert("We have handled your submit.")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector("img").addEventListener("mouseover", function () {
	alert("You found me haha.");
})