const burgerIcon = document.getElementsByClassName('menu__burger')[0]
const burgerMenu = document.getElementsByClassName('burger-menu')[0]


document.addEventListener('click',(e=>{
	if(e.target.closest(".menu__burger")){
		burgerIcon.classList.toggle('active')
		window.scrollTo(0,0)
		burgerMenu.classList.toggle('active')
		document.body.classList.toggle("hidden")

	}
	if(e.target.classList.contains('burger__link')){
		e.preventDefault()
		burgerIcon.classList.toggle('active')
		burgerMenu.classList.toggle('active')
		document.body.classList.toggle("hidden")
		setTimeout(()=>window.location.href = e.target.href,200)
	}
}))