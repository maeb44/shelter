import { createElement } from "./createEl.js";

export function createModal(petData){
	const background = createElement({
    tag: 'div',
    className: 'background'
  });
	const modal = createElement({
    tag: 'div',
    className: 'modal'
  });
	const closeBtn = createElement({
		tag: 'div',
		className: 'modal__close_btn',
		innerHTML: `
			<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1" y="1" width="50" height="50" rx="25" stroke="#F1CDB3" stroke-width="2" />
				<path fill-rule="evenodd" clip-rule="evenodd" d="M27.4262 26L31.7046 21.7216C32.0985 21.3277 32.0985 20.6892 31.7046 20.2954C31.3108 19.9016 30.6723 19.9016 30.2785 20.2954L26 24.5739L21.7215 20.2954C21.3276 19.9015 20.6892 19.9015 20.2953 20.2954C19.9016 20.6892 19.9016 21.3277 20.2953 21.7215L24.5738 26L20.2953 30.2785C19.9016 30.6723 19.9016 31.3108 20.2953 31.7046C20.6892 32.0985 21.3276 32.0985 21.7215 31.7046L26 27.4261L30.2785 31.7046C30.6723 32.0985 31.3108 32.0985 31.7046 31.7046C32.0985 31.3108 32.0985 30.6723 31.7046 30.2785L27.4262 26Z" fill="#292929" />
			</svg>
		`
	});

	const img = createElement({
    tag: 'img',
    src: petData.img,
    alt: petData.name,
    className: 'modal__img'
  });
	const modalDesc = createElement({
    tag: 'div',
    className: 'modal__desc'
  });
	const modalDescHead = createElement({
    tag: 'div',
    className: 'modal__desc_head'
  });
	const title = createElement({
    tag: 'h3',
    textContent: petData.name
  });
	const subtitle = createElement({
    tag: 'h4',
    textContent: `${petData.type} - ${petData.breed}`
  });

	modalDescHead.appendChild(title);
  modalDescHead.appendChild(subtitle);

	const description = createElement({
    tag: 'h5',
    textContent: petData.description
  });
	const list = createElement({
    tag: 'ul'
  });
	const ageItem = createElement({
    tag: 'li',
    innerHTML: `<strong>Age:</strong> ${petData.age}`
  });
	const inoculationsItem = createElement({
    tag: 'li',
    innerHTML: `<strong>Inoculations:</strong> ${petData.inoculations}`
  });

  const diseasesItem = createElement({
    tag: 'li',
    innerHTML: `<strong>Diseases:</strong> ${petData.diseases}`
  });

  const parasitesItem = createElement({
    tag: 'li',
    innerHTML: `<strong>Parasites:</strong> ${petData.parasites}`
  });

	list.appendChild(ageItem);
  list.appendChild(inoculationsItem);
  list.appendChild(diseasesItem);
  list.appendChild(parasitesItem);

	modalDesc.appendChild(modalDescHead);
  modalDesc.appendChild(description);
  modalDesc.appendChild(list);

	modal.appendChild(closeBtn);
  modal.appendChild(img);
  modal.appendChild(modalDesc);

	background.appendChild(modal);

	function closeModal() {
    background.remove();
  }
  closeBtn.addEventListener('click',()=>{
		document.body.classList.toggle("hidden")
		closeModal()
	});
	background.addEventListener('click', (e) => {
    if (e.target === background) {
			document.body.classList.toggle("hidden")
      closeModal();
    }
  });

	return background;
}

