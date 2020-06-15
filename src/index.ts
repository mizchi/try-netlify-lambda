const TARGET = location.host.startsWith("localhost")
  ? "http://localhost:9000/api"
  : "/.netlify/functions/api";
fetch(TARGET).then(async (res) => {
  const data = await res.text();
  console.log("data", data);
});
