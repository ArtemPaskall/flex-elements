// class FlexFillWithGrow extends HTMLElement {
  
//   constructor() {
//     super();
    
//   }
// }

// [...Array(13).keys()].forEach(grow =>
//   customElements.define(`flex-${grow}`, FlexFillWithGrow)
// )

function defineElement(classToCopy, elmname) {
  let copy = class extends classToCopy {}
  customElements.define(elmname, copy);
}

[...Array(13).keys()].forEach(grow =>
  defineElement(HTMLElement, `flex-${grow}`)
)