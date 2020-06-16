import express from "express";
import serverless from "serverless-http";

const isProd = process.env.NODE === "production";

const app = express();
const router = express.Router();

router.use((_req, res, next) => {
  if (!isProd) {
    res.header("Access-Control-Allow-Origin", "*");
  }
  next();
});

router.get<{ id: string }>("/:id", (req, res) => {
  res.send("ok " + req.params.id);
});

const apiRoot =
  process.env.NODE_ENV === "production" ? "/.netlify/functions/api" : "/api";
app.use(apiRoot, router);

exports.handler = serverless(app);
