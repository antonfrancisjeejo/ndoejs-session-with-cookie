const express = require("express");

const app = express();

const cookies = require("cookie-parser");

app.use(cookies());

let user = {
  userType: 1,
  token: "e2erfgd34rssd235gdfgdfghsdg34rtfsgvd",
};

app.get("/set/:name", (req, res) => {
  user.name = req.params.name;
  res.cookie("userData", user);
  res.send("Cookie set");
});

app.get("/get/cookie", (req, res) => {
  let name = req.cookies;
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
