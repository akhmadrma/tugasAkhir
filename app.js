const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

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
const kewenganganDesaRoute = require('./routes/kewenanganDesas');
const bidangKewenanganRoute = require('./routes/bidangKewenangans');
const uploader = require('./routes/uploader');

app.use(bodyParser.json());

app.use('/landasanHukum', express.static('filesUpload/landasanHukum'))

app.use("/user", userRoute);
app.use("/dataPenduduk", dataPendudukRoute);
app.use("/dusun", dusunRoute);
app.use("/rukunWarga", rukunWargaRoute);
app.use("/rukunTetangga", rukunTetanggaRoute);
app.use("/saranaPrasarana", saranaPrasaranaRoute);
app.use("/lembagaDesa", lembagaDesaRoute);
app.use("/kepengurusanLembagaDesa", kepengurusanLembagaDesaRoute);
app.use("/kegiatanLembagaDesa",kegiatanLembagaDesaRoute)
app.use ("/kewenanganDesa",kewenganganDesaRoute)
app.use ('/bidangKewenangan',bidangKewenanganRoute)
app.use ('/uploader',uploader)

module.exports = app;
