import { getApiRoot } from "../shared/getApiRoot";

fetch(getApiRoot() + "/api").then(async (res) => {
  const data = await res.text();
  document.body.textContent = JSON.stringify(data);
});
