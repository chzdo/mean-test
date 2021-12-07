const express = require("express");
const cors = require("cors")
require("dotenv").config()

const app = express();

app.use(cors())

app.use(express.static(__dirname + "/client/dist/client"));


app.post("/api/add", function (req, res) {
    res.send({
        id: 1,
        name: "Stanley NDuaguibe"
    })
});


app.get("/api/", function (req, res) {
    res.json([{
        id: 1,
        name:"Stanley Nduaguibe"
    }])
})


app.use("*", function (req, res) {
    res.sendFile(__dirname + "/client/dist/client/index.html")
})


app.listen(process.env.PORT || 4500, () => console.log("started"));
