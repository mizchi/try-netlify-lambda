const TARGET = location.host.startsWith("localhost")
  ? "http://localhost:9000/hello"
  : "/.netlify/functions/hello";
fetch(TARGET).then(async (res) => {
  const data = await res.text();
  console.log("data", data);
});
