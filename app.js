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
const kepengurusanLembagaDesaRoute = require("./routes/kepengurusanLembagaDesas");
const kegiatanLembagaDesaRoute = require("./routes/kegiatanLembagaDesas");
const kewenganganDesaRoute = require("./routes/kewenanganDesas");
const bidangKewenanganRoute = require("./routes/bidangKewenangans");
const sumberPenghasilanAparaturRoute = require("./routes/sumberPenghasilanAparaturs");
const kategoriJabatanAparaturDesaRouter = require("./routes/kategoriJabatanAparaturDesas");
const aparaturDesaRoute = require("./routes/aparaturdesas");
const penghasilanAparaturRoute = require('./routes/penghasilanAparaturs');
const peristiwaKeamananRoute = require('./routes/peristiwaKeamanans');
const peristiwaBencanaRoute = require('./routes/peristiwaBencanas');
const pendapatanDesaRoute = require('./routes/pendapatanDesas')
const belanjaDesaRoute = require('./routes/belanjadesas')
const pembiayaanDesaRoute = require('./routes/pembiayaanDesas');
const geografiDesaRoute = require("./routes/geografiDesas");
const sumberDayaAlamDesaRoute = require("./routes/sumberDayaAlamDesas");

const uploader = require("./routes/uploader");

app.use(bodyParser.json());

app.use("/landasanHukum", express.static("filesUpload/landasanHukum"));
app.use("/buktiTransaksi", express.static("filesUpload/buktiTransaksi"));

app.use("/user", userRoute);
app.use("/dataPenduduk", dataPendudukRoute);
app.use("/dusun", dusunRoute);
app.use("/rukunWarga", rukunWargaRoute);
app.use("/rukunTetangga", rukunTetanggaRoute);
app.use("/saranaPrasarana", saranaPrasaranaRoute);
app.use("/lembagaDesa", lembagaDesaRoute);
app.use("/kepengurusanLembagaDesa", kepengurusanLembagaDesaRoute);
app.use("/kegiatanLembagaDesa", kegiatanLembagaDesaRoute);
app.use("/kewenanganDesa", kewenganganDesaRoute);
app.use("/bidangKewenangan", bidangKewenanganRoute);
app.use("/sumberPenghasilanAparatur", sumberPenghasilanAparaturRoute);
app.use("/kategoriJabatanAparaturDesa", kategoriJabatanAparaturDesaRouter);
app.use("/aparaturDesa",aparaturDesaRoute);
app.use('/penghasilanAparatur',penghasilanAparaturRoute)
app.use('/peristiwaKeamanan',peristiwaKeamananRoute)
app.use("/peristiwaBencana", peristiwaBencanaRoute);
app.use("/pendapatanDesa",pendapatanDesaRoute)
app.use("/belanjaDesa", belanjaDesaRoute);
app.use ("/pembiayaanDesa",pembiayaanDesaRoute)
app.use("/geografiDesa", geografiDesaRoute);
app.use("/sumberDayaAlamDesa", sumberDayaAlamDesaRoute);


app.use("/uploader", uploader);

module.exports = app;
