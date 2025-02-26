const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// EJS
app.set("view engine", "ejs");

//Статичная папка
app.use(express.static("public"));

// Рендер главной страницы
app.get(["/", "/index"], (req, res) => {
	res.render("index", { activePage: "index" });
});

app.listen(PORT, () => {
	console.log("см. тут: http://localhost:" + PORT);
});