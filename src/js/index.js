// IMPORT
import openModalCreate from "./modal/openModalCreate.js";
import closeModal from "./modal/closeModal.js";
import getEvents from "./eventCase/getEvents.js";
import "./modal/calendar.js";
import addEvents from "./eventCase/createEvent.js";

// QUERY SELECTOR
let btnCreate = document.querySelector("#btn-create");
let btnClose = document.querySelector("#modal-close");
let btnSubmit = document.querySelector("#submit-btn");

// LISTENERS
btnCreate.addEventListener("click", openModalCreate);
btnClose.addEventListener("click", closeModal);
btnSubmit.addEventListener("click", addEvents);
// FUNCTION

getEvents();
