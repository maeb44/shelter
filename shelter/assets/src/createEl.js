export function createElement(params){
	const{tag,...props} = params
	const element = document.createElement(tag)

	Object.assign(element,props);

	if (props.style && typeof props.style === 'object') {
      Object.assign(element.style, props.style);
  }
  if (props.data && typeof props.data === 'object'){
      Object.entries(props.data).forEach(([key, value]) => {
      element.dataset[key] = value;
  });
  }
	return element;
}