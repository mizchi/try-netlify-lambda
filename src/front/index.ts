const API_ENDPOINT = location.host.startsWith("localhost")
  ? "http://localhost:9000/api"
  : "/.netlify/functions/api";
fetch(API_ENDPOINT).then(async (res) => {
  const data = await res.text();
  console.log("data", data);
});
