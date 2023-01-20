class FlexLayout extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const style = document.createElement('style')



    style.textContent = '.side-indents {' +
        '@media (max-width: 768px) {' +
          'display: none'+
        '}'+
    '}'
    this.style.display = 'flex' 
    this.style.flexDirection = 'row' 
    this.style.justifyContent = 'center' 
    this.children[0].setAttribute('class', '.side-indents')
    this.children[1].setAttribute('class', '.main-content')
    this.children[2].setAttribute('class', '.side-indents')

    shadow.appendChild(style);
    [...this.children].forEach(el => {
      shadow.appendChild(el);
    })
  }
}

customElements.define('flex-layout', FlexLayout);