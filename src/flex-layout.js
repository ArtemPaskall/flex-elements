class FlexLayout extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    this.style.display = 'flex' 
    this.style.flexDirection = 'row' 
    this.style.justifyContent = 'center' 
    console.log(this.children[1]);
    
    [...this.children].forEach(el => {
      shadow.appendChild(el);
    })
  }
}



customElements.define('flex-layout', FlexLayout);