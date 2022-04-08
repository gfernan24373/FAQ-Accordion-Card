let button = document.querySelectorAll('.faq-button');
let faq = document.querySelectorAll('.p-faq');
let icon = document.querySelectorAll('.icon');
//first loop to set property display = none to all faqs answers (<p>)
for(faqs of faq) {
	faqs.style.display = 'none';
}

//settings all the selected elements
button.forEach((v, i, arr) => {
	arr[i].onclick = () =>{
		if(faq[i].style.display == 'none') {
			faq[i].style.display = 'block';
			arr[i].style.fontWeight = 'bold';
			icon[i].style.transform = 'rotate(0.5turn)';
		} else {
			faq[i].style.display = 'none';
			arr[i].style.fontWeight = 'normal';
			icon[i].style.transform = 'rotate(1turn)'; //rotate the arrow icon when the user click on button
		}
	}
});
