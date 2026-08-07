export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(dt) {
    dt.classList.toggle(this.activeClass);
    dt.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((dt) => {
      dt.style.cursor = "pointer";
      dt.addEventListener("click", () => this.toggleAccordion(dt));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
