import { createElement } from "./createEl.js";
import { createCard } from "./createCard.js";
import { petsData } from "./jsonLoad.js";
import { createModal } from "./popup.js";


export function corusel(){
	const arrOfCards = createCard()
	arrOfCards.sort(() => Math.random()-0.5)
	let i = 0;
	const wrapper = document.querySelector(".cards__wrapper")
	const mainSlider = document.querySelector('.find__cards')
	|| createElement({
		tag:"div",
		className:"find__cards",
	})
	const newSlider = createElement({
		tag:"div",
		className:"find__cards",
	})
	const newSlider1 = createElement({
		tag:"div",
		className:"find__cards",
	})
	while(mainSlider.children.length < 3){
		mainSlider.append(arrOfCards[i])
		i++;
	}

	while(newSlider.children.length < 3){
		let skip = false;
		for(let child of mainSlider.children){
			if(child.children[1].textContent === arrOfCards[i].children[1].textContent){
				skip = true;
				break;
			}
		}
		if(!skip){	
				let clone = arrOfCards[i].cloneNode(true)
				let name = clone.querySelector('.h4').textContent;
				let petData = petsData.find(pet => pet.name === name);
				clone.addEventListener("click",(e)=>{
					document.body.classList.toggle("hidden")
					document.body.append(createModal(petData))
				})
				newSlider.append(clone)
				i = (i + 1) % arrOfCards.length;
				continue;
		}
		i = (i + 1) % arrOfCards.length;
	}
	while(newSlider1.children.length < 3){
		let skip = false;
		for(let child of mainSlider.children){
			if(child.children[1].textContent === arrOfCards[i].children[1].textContent){
				skip = true;
				break;
			}
		}
		if(!skip){	
				let clone1 = arrOfCards[i].cloneNode(true)
				let name = clone1.querySelector('.h4').textContent;
				let petData = petsData.find(pet => pet.name === name);
				clone1.addEventListener("click",(e)=>{
					document.body.classList.toggle("hidden")
					document.body.append(createModal(petData))
				})
				newSlider1.append(clone1)
				i = (i + 1) % arrOfCards.length;
				continue;
				}
				i = (i + 1) % arrOfCards.length;
	}

	wrapper.replaceChildren()
	wrapper.append(newSlider,mainSlider,newSlider1)
}
document.addEventListener('click',(e)=>{
		if (e.target.closest('.arrow__left')) {
			const right = document.querySelector('.arrow__right')
			right.disabled = true
			e.target.disabled = true
			const cards = document.querySelectorAll(".find__cards")
			const gap = getComputedStyle(cards[0]).gap || 0;
			for(let card of cards){ card.style.transform = `translateX(calc(100% + ${gap}))`}
			setTimeout(()=>{
				cards[2].remove()
				cards[1].remove()
				for(let card of cards){
					 card.style.transition = "none"
					 card.style.transform = "translateX(0%)"
					 setTimeout(()=>{
						right.disabled = false
						e.target.disabled = false
						card.style.transition = ""},5)
					}
					corusel()
			},700)
	 }
   	if (e.target.closest('.arrow__right')) {
			const left = document.querySelector('.arrow__left')
			left.disabled = true;
			e.target.disabled = true;
			const cards = document.querySelectorAll(".find__cards")
			const gap = getComputedStyle(cards[0]).gap || 0;
			for(let card of cards){ card.style.transform = `translateX(calc(-100% - ${gap}))`}
			setTimeout(()=>{
				cards[1].remove()
				cards[0].remove()
				for(let card of cards){
					 card.style.transition = "none"
					 card.style.transform = "translateX(0%)"
					 setTimeout(()=>{
						card.style.transition = ""
						left.disabled = false;
						e.target.disabled = false;
					},5)
					}
					corusel()
			},700)
		}
	})
corusel()






	
