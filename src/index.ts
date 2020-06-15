fetch("/.netlify/functions/hello").then(async (res) => {
  const data = await res.text();
  console.log("data", data);
});
