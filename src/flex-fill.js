class FlexFillWithGrow extends HTMLElement {
  
  constructor() {
    super();

    const grow = this.localName.slice(this.localName.indexOf('-') + 1)
    this.style.flex = grow

    function changeStyles() {
      console.log(this);
      if (window.innerWidth < 768) {
        if (this.getAttribute('class') === '.side-indents') {
          this.style.display = "none"
        }
      } else {
        if (this.getAttribute('class') === '.side-indents') {
          this.style.display = "block"
        }
      }
    }

    changeStyles.call(this)
    window.addEventListener('resize', changeStyles.bind(this))
  }
}

function defineElement(classToCopy, elmname) {
  let copy = class extends classToCopy {}
  customElements.define(elmname, copy);
}

[...Array(13).keys()].forEach(grow =>
  defineElement(FlexFillWithGrow, `flex-${grow}`)
)