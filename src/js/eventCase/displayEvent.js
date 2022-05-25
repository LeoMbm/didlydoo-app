const caseC = document.querySelector(".item-container");
const notValid = document.createElement("i");
notValid.className = "fa-solid fa-xmark";
const valid = document.createElement("i");
valid.className = "fa-solid fa-check";

export default function displayEvent(data) {
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "event-item");

    const topItem = document.createElement("div");
    topItem.className = "top-item";

    const eventTitle = document.createElement("h3");
    eventTitle.setAttribute("id", "event-name");

    const itemDate = document.createElement("p");
    itemDate.setAttribute("id", "item-date");

    const mainItem = document.createElement("div");
    mainItem.className = "main-item";

    const leftItem = document.createElement("div");
    leftItem.className = "left-side";

    const description = document.createElement("p");
    description.setAttribute("id", "item-description");

    const rightItem = document.createElement("div");
    rightItem.className = "right-side";

    const userList = document.createElement("ul");
    userList.setAttribute("id", "user-list");

    const list = document.createElement("li");
    list.setAttribute("id", "user");

    eventTitle.innerHTML = data[i].name;
    itemDate.innerHTML = "Start :" + " " + data[i].dates[0].date;
    description.innerHTML = data[i].description;

    // if (data[i].dates[i].attendees[i].available == true) {
    //   list.innerHTML =
    //     data[i].dates[i].attendees[i].name +
    //     '<i class="fa-solid fa-check"></i>';
    // } else {
    //   list.innerHTML =
    //     data[i].dates[i].attendees[i].name +
    //     '<i class="fa-solid fa-xmark"></i>';
    // }

    caseC.appendChild(item);
    item.appendChild(topItem);
    item.appendChild(mainItem);

    topItem.appendChild(eventTitle);
    topItem.appendChild(itemDate);

    mainItem.appendChild(leftItem);
    mainItem.appendChild(rightItem);

    leftItem.appendChild(description);
    rightItem.appendChild(userList);
    userList.appendChild(list);
    // list.appendChild(valid);
  }
}
