// IMPORT
import openModalCreate from "./openModalCreate.js";
import closeModal from "./closeModal.js";

// QUERY SELECTOR
let btnCreate = document.querySelector("#btn-create");
let btnClose = document.querySelector("#modal-close");

// LISTENERS
btnCreate.addEventListener("click", openModalCreate);
btnClose.addEventListener("click", closeModal);
