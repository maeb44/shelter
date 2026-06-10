import { createCard } from "./createCard.js";

export function pagination(){
		let curPage = 1;
		const cards = Array.from({length:6},(x)=>[...createCard()
			.sort(()=>Math.random()-0.5)])
			.flat()
	return function(direction){

			curPage+=direction;

			const itemsPerPage = window.innerWidth>1200?8:
			window.innerWidth>600?6:3;
			if(curPage < 1 ||  curPage > cards.length/itemsPerPage) return null

			const maximum = cards.length/itemsPerPage;
			if(direction==-2) curPage = 1;
			if(direction==+2) curPage = maximum;

			const right = document.getElementById('right')
			const left = document.getElementById('left')
			const first = document.getElementById('first')
			const last = document.getElementById('last')

			const isFirstPage = curPage <= 1
			first.disabled = isFirstPage
			left.disabled = isFirstPage
			first.classList.toggle('passive', isFirstPage)
			left.classList.toggle('passive', isFirstPage)

			const isLastPage = curPage >= maximum
			last.disabled = isLastPage
			right.disabled = isLastPage
			last.classList.toggle('passive', isLastPage)
			right.classList.toggle('passive', isLastPage)

			const section = document.querySelector('.find__cards_second')
			const number = document.getElementById('number')

			let start = (curPage-1) * itemsPerPage;
			let end = curPage * itemsPerPage;

			const page = cards.slice(start,end)
			section.innerHTML=''
			for(let card of page){
				section.append(card)
			}
			number.textContent = curPage
	}
}
const nextPage = pagination()

nextPage(0)

const section = document.querySelector('.find__cards_second')
let isAnim = false;

document.getElementsByClassName('div__btns')[0].addEventListener("click",(e)=>{
	const id=e.target.id;
	if(id === 'left'){
		if(!isAnim){
			isAnim = true;
			section.style.transform = "translateX(100vw)"
			setTimeout(()=>{
				section.style.transition = 'none'
				section.style.transform = "translateX(-100vw)"
			},190)
			setTimeout(()=>{	
				nextPage(-1)
				section.style.transition = ''
				section.style.transform = "translateX(0)"
				isAnim = false;
			},230)
		}
	}
	
	if(id === 'right'){
		if(!isAnim){
			console.log(1)
			isAnim = true;
			section.style.transform = "translateX(-100vw)"
			setTimeout(()=>{
				section.style.transition = 'none'
				section.style.transform = "translateX(100vw)"
			},190)
			setTimeout(()=>{	
				nextPage(+1)
				section.style.transition = ''
				section.style.transform = "translateX(0)"
				isAnim = false;
			},230)
		}
	}
	if(id === 'first'){
		if(!isAnim){
			isAnim = true;
			section.style.transform = "translateX(100vw)"
			setTimeout(()=>{
				section.style.transition = 'none'
				section.style.transform = "translateX(-100vw)"
			},190)
			setTimeout(()=>{	
				nextPage(-2)
				section.style.transition = ''
				section.style.transform = "translateX(0)"
				isAnim = false;
			},230)	
	}
	}
	if(id === 'last'){
			if(!isAnim){
				isAnim = true;
				section.style.transform = "translateX(-100vw)"
				setTimeout(()=>{
					section.style.transition = 'none'
					section.style.transform = "translateX(100vw)"
				},190)
				setTimeout(()=>{	
					nextPage(2)
					section.style.transition = ''
					section.style.transform = "translateX(0)"
					isAnim = false;
				},230)
			}
	}
})
