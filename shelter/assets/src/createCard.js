import { petsData } from "./jsonLoad.js";
import { createElement } from "./createEl.js";

export function createCard(){
	const arr = []
	const data = petsData
	data.forEach(el=>{
			let {name,img,type,breed,description,age,inoculations,diseases,parasites} = el
			let div = createElement({
				tag:'div',
				className:'card'
			})
			let divImg = createElement({
				tag:'img',
				src:img,
				alt:type
			})
			let p = createElement({
				tag:'p',
				className:'h4',
				textContent:name
			})
			let button = createElement({
				tag:"button",
				className:"card__btn",
				textContent:"Learn more"
			})
			div.append(divImg,p,button)
			arr.push(div)
		})
		return arr;
	}


