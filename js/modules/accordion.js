export default function initAccordionList() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt",
  );

  const activeClass = "ativo";

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((dt) => {
      dt.style.cursor = "pointer";
      dt.addEventListener("click", activeAccordion);
    });
  }
}
