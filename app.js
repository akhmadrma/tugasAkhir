const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userRoute = require("./routes/users");
const dataPendudukRoute = require("./routes/dataPenduduks");
const rukunTetanggaRoute = require("./routes/rukunTetanggas");
const rukunWargaRoute = require("./routes/rukunWargas");
const dusunRoute = require("./routes/dusuns");
const saranaPrasaranaRoute = require("./routes/saranaPrasaranas");
const lembagaDesaRoute = require("./routes/lembagadesas");
const kepengurusanLembagaDesaRoute = require('./routes/kepengurusanLembagaDesas');
const kegiatanLembagaDesaRoute = require('./routes/kegiatanLembagaDesas');

app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/dataPenduduk", dataPendudukRoute);
app.use("/dusun", dusunRoute);
app.use("/rukunWarga", rukunWargaRoute);
app.use("/rukunTetangga", rukunTetanggaRoute);
app.use("/saranaPrasarana", saranaPrasaranaRoute);
app.use("/lembagaDesa", lembagaDesaRoute);
app.use("/kepengurusanLembagaDesa", kepengurusanLembagaDesaRoute);
app.use("/kegiatanLembagaDesa",kegiatanLembagaDesaRoute)

module.exports = app;
