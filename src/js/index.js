// IMPORT
import openModalCreate from "./modal/openModalCreate.js";
import closeModal from "./modal/closeModal.js";
import getEvents from "./eventCase/getEvents.js";
import "./modal/calendar.js";

// QUERY SELECTOR
let btnCreate = document.querySelector("#btn-create");
let btnClose = document.querySelector("#modal-close");

// LISTENERS
btnCreate.addEventListener("click", openModalCreate);
btnClose.addEventListener("click", closeModal);
// FUNCTION

getEvents();
