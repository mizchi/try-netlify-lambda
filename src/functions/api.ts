import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send("ok/api " + req.url);
});

module.exports.handler = serverless(app);
