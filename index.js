const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) return console.log(err.message);
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf-8", (err, data) => {
    if (err) return console.log(err.message);
    res.send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("contact-me.html", "utf-8", (err, data) => {
    if (err) return console.log(err.message);
    res.send(data);
  });
});

app.get("*", (req, res) => {
  fs.readFile("404.html", "utf-8", (err, data) => {
    if (err) return console.log(err.message);
    res.send(data);
  });
});

app.listen(3000);
