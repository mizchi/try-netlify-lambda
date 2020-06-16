const API_ENDPOINT = location.host.startsWith("localhost")
  ? "http://localhost:9000"
  : "/.netlify/functions";
console.log(process.env.NODE_ENV);

fetch(API_ENDPOINT + "/api").then(async (res) => {
  const data = await res.text();
  document.body.textContent = JSON.stringify(data);
});
