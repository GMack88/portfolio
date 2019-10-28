const express = require("express");
const app = express();

app.use(express.static(__dirname + "/build"));

app.listen(5500, () => console.log("listing"));
