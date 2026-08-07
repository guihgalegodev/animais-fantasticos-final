import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initTabNav from "./modules/tabnav.js";
import initAccordionList from "./modules/accordion.js";
import activeModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import InitFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

initAnimacaoScroll();
initTabNav();
initAccordionList();
activeModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
InitFuncionamento();
initFetchAnimais();
initFetchBitcoin();
