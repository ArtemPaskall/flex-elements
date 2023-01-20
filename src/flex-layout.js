class FlexLayout extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    this.style.display = 'flex' 
    this.style.flexDirection = 'row' 
    this.style.justifyContent = 'center' 
    this.children[0].setAttribute('class', '.side-indents')
    this.children[1].setAttribute('class', '.main-content')
    this.children[2].setAttribute('class', '.side-indents')

    ;[...this.children].forEach(el => {
      shadow.appendChild(el);
    })
  }
}

customElements.define('flex-layout', FlexLayout);