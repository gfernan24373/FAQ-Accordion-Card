let btn = document.querySelectorAll('.btn');
let respuesta = document.querySelectorAll('.respuesta');
let icon = document.querySelectorAll('.icon');

btn.forEach((v, i, arr) => {
	arr[i].onclick = () => {
		if(arr[i].nextElementSibling.style.maxHeight) { //Look the sibling of button(p tag) and if max-height != 0 set maxHeight to 0 again.
			arr[i].nextElementSibling.style.maxHeight = null;
			arr[i].style.fontWeight = 'normal';
			icon[i].style.transform = 'rotate(1turn)'; //rotate the arrow icon when the user click on button
		} else {
			arr[i].nextElementSibling.style.maxHeight = arr[i].nextElementSibling.scrollHeight + 'px';
			arr[i].style.fontWeight = 'bold';
			icon[i].style.transform = 'rotate(0.5turn)';
		}
	}
});