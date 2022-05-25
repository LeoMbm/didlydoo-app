async function addEvents() {
  const req = await fetch(
    "http://localhost:3000/api/events/"({
      method: "POST",
      body: [{ name: "", dates: [""], author: "", description: "" }],
    })
  );
}
