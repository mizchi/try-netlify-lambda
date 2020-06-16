const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions"
    : "http://localhost:9000";

export const getApiRoot = () => API_ROOT;
