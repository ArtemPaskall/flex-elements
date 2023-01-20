class FlexFillWithGrow extends HTMLElement {
  
  constructor() {
    super();

    const grow = this.localName.slice(this.localName.indexOf('-') + 1)
    this.style.flex = grow

    console.log();
  }
}

function defineElement(classToCopy, elmname) {
  let copy = class extends classToCopy {}
  customElements.define(elmname, copy);
}

[...Array(13).keys()].forEach(grow =>
  defineElement(FlexFillWithGrow, `flex-${grow}`)
)