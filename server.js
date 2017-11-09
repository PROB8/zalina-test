const express = require("express");
const app  = express();

const port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname, '../client/build', "/public/index.html")
})

app.listen(port,  () => {
    console.log("Server's starting!!");
})