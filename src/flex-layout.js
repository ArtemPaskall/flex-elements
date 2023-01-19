class FlexLayout extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    this.style.display = 'flex' 
    this.style.flexDirection = 'row' 
    this.style.justifyContent = 'center' 
    this.style.alignItems = 'center' 
      console.log(this.children);
    
    [...this.children].forEach(el => {
      shadow.appendChild(el);
    })
  }
}



customElements.define('flex-layout', FlexLayout);