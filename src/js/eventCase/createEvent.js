const title = document.getElementById("input-name");
const dates = document.querySelector(".date-picker");
const description = document.getElementById("input-desc");
const add = document.getElementById("input-add");
import displayEvent from "./displayEvent.js";

const button = document.querySelector("#submit-btn");

export default function addEvents(e) {
  e.preventDefault();

  console.log(title.value);
  console.log(dates.value);
  console.log(description.value);
  console.log(add.value);
  fetch("http://localhost:3000/api/events/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: title.value,
      dates: [
        dates.value,
        // {
        //   attendees: [add.value],
        //   date: [dates.value],
        // },
      ],
      author: add.value,
      description: description.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const array = [];
      array.push(data);
      console.log(data);
    });
}
