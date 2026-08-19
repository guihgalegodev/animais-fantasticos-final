export default class Modal {
  constructor(abrirModal, fecharModal, containerModal) {
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal(e) {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.abrirModal.addEventListener("click", this.eventToggleModal);
    this.fecharModal.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.abrirModal && this.fecharModal && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
