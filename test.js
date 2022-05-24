`<div class="container">
<div class="event-case">
  <h2 id="event-title">Events</h2>
  <div class="item-container">
    <div class="event-item">
      <div class="top-item">
        <h3 id="event-name"></h3>
        <p id="item-date"></p>
      </div>
      <div class="main-item">
        <div class="left-side">
          <p id="item-description"></p>
        </div>
        <div class="right-side">
          <ul id="user-list">
         
        </div>
      </div>
    </div>`;

const caseC = document.querySelector(".item-container");

const item = document.createElement("div");
item.setAttribute("class", "event-item");

const topItem = document.createElement("div");
topItem.className = "top-item";

caseC.appendChild(item);

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

item.appendChild(topItem);
item.appendChild(mainItem);

topItem.appendChild(eventTitle);
topItem.appendChild(itemDate);

mainItem.appendChild(leftItem);
mainItem.appendChild(rightItem);

leftItem.appendChild(description);
rightItem.appendChild(userList);
userList.appendChild(list);
