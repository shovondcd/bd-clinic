const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let patients = [];
let totalIncome = 0;

app.get("/", (req, res) => {
  res.render("dashboard", { patients: patients.length, income: totalIncome });
});

app.get("/add-patient", (req, res) => {
  res.render("addPatient");
});

app.post("/add-patient", (req, res) => {
  const { name, phone, fee } = req.body;
  patients.push({ name, phone });
  totalIncome += parseInt(fee);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
