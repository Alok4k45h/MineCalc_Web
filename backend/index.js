const express = require("express");
const app = express();
const fs = require("fs");
const { spawn } = require("child_process");
var cors = require("cors");
const busboyBodyParser = require("busboy-body-parser");
app.use(busboyBodyParser());
app.use(cors());
app.use(express.json());

const port = 8000;

app.get("/python", (req, res) => {
  //console.log("hello world");

  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", ["../python/scriptfile.py"]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.json({ downloadfile: true });
    //res.send(dataToSend);
    //console.clear();
    //process.stdout.write('\033c');
    console.log(dataToSend);
  });
});

app.get("/", (req, res) => {
  res.send("Hi server started");
});

app.post("/upload", (req, res) => {
  //console.log("Connected to React");
  console.log(req.body);
  console.log("Hello dear");
  console.log(req.files);

  fs.writeFile(
    "../res/temp/burdenspacing.csv",
    req.files.file["data"],
    "ascii",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
  res.redirect("/python");
});

app.get("/download", (req, res) => {
  res.download("../res/temp/burdenspacing.csv");
});

app.post("/usbm", (req, res) => {
  const { p, r, d, RC } = req.body;
  console.log(p);
  console.log(r);
  console.log(d);
  console.log(RC);

  const numerator = 48 * p * r;
  const denominator = 3.14 * d * d * RC;
  const ans = numerator / denominator;
  res.json(ans.toFixed(5));
});

app.post("/cw", (req, res) => {
  const { f, n, d, RC } = req.body;
  console.log(f);
  console.log(n);
  console.log(d);
  console.log(RC);
  res.json("5");
});

app.post("/norway", (req, res) => {
  const { b, sj, drm } = req.body;
  console.log(b);
  console.log(sj);
  console.log(drm);

  res.json("10");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});