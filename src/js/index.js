// IMPORT
import openModalCreate from "./modal/openModalCreate.js";
import closeModal from "./modal/closeModal.js";
import getEvents from "./eventCase/getEvents.js";
import "./modal/calendar.js";
import addEvents from "./eventCase/createEvent.js";
import darkmode from "./features/darkmode.js";

// QUERY SELECTOR
const btnCreate = document.querySelector("#btn-create");
const btnClose = document.querySelector("#modal-close");
const btnSubmit = document.querySelector("#submit-btn");
const darkBtn = document.getElementById("dark-btn");

// LISTENERS
btnCreate.addEventListener("click", openModalCreate);
btnClose.addEventListener("click", closeModal);
btnSubmit.addEventListener("click", addEvents);
darkBtn.addEventListener("click", darkmode);
// FUNCTION

getEvents();
