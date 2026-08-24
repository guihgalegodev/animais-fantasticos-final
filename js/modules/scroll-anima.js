export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // bind do this para usar no callback do eventListener scroll
    this.animaScroll = this.animaScroll.bind(this);
  }
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - this.windowMetade < 0;

      if (isVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
    return this;
  }
}
