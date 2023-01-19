class FlexLayout extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    const style = document.createElement('style');

    style.textContent = '.wrapper {' +   
      'display: flex,' +
      'flexDirection: row,' +
      'justifyContent: center,' + 
      'alignItems: center' +
    '}'

    console.log(this.children);

    shadow.appendChild(style);
  }
}



customElements.define('flex-layout', FlexLayout);