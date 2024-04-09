function customRender(reactElement,mainContainer){
  // const element = document.createElement(reactElement.type);
  // element.innerHTML = reactElement.children[0];
  // element.setAttribute('href',reactElement.props.href);
  // element.setAttribute('target',reactElement.props.target);
  // mainContainer.appendChild(element);


  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children[0];
  for (const key in reactElement.props) {
    domElement.setAttribute(key,reactElement.props[key]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: { 
    href: 'https://www.google.com',
    target : '_blank',
  },
  children: ['Click me to visit google']
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);