const express = require("express");

const app = express();

const session = require("express-session");

app.use(
  session({
    secret: "Seckret Key",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/set/:name", (req, res) => {
  console.log(req.params);
  req.session.name = req.params.name;
  res.send("Session set");
});

app.get("/get/session", (req, res) => {
  console.log(req.session);
  let name = req.session.name;
  res.send(name);
});

app.get("/destory", (req, res) => {
  req.session.destroy((err) => {
    console.log(err);
  });
  res.send("Destoryed");
});

app.listen(5000, () => {
  console.log("Server started");
});
