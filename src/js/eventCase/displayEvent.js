const titleEvent = document.querySelectorAll("p");

export default function displayEvent(data) {
  for (let i = 0; i < data.length; i++) {
    titleEvent.forEach((title) => {
      title.innerHTML = data[i].name;
    });
  }
}
