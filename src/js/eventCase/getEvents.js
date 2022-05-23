import displayEvent from "./displayEvent.js";

export default async function getEvents() {
  const req = await fetch("http://localhost:3000/api/events/");
  const data = await req.json();
  console.log(data);
  displayEvent(data);
}
getEvents();
