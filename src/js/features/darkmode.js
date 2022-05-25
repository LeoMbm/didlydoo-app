const container = document.querySelectorAll(".event-case");
const items = document.getElementsByClassName("event-item");
const main = document.querySelector("main");
const title = document.querySelectorAll("#event-title");

export default function darkmode() {
  document.body.style.backgroundColor = "#181818";
  document.body.style.color = "black";
  document.body.style.transition = "all 1s";
  main.style.backgroundColor = "#181818";

  container.forEach((element) => {
    element.style.backgroundColor = "#013251";
  });

  title.forEach((element) => {
    element.style.color = "#FFF";
    console.log(element);
  });
}
