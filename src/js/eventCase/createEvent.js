const title = document.getElementById("#input-name");
const dates = document.getElementById("#input-date");
const description = document.getElementById("#input-desc");

const button = document.querySelector("#submit-btn");

export default async function addEvents() {
  const req = await fetch(
    "http://localhost:3000/api/events/"({
      method: "POST",
      body: [
        {
          name: title.value,
          dates: [dates.values],
          author: title.value,
          description: description.value,
        },
      ],
    })
  );
}
