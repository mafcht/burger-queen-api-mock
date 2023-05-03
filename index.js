const express = require("express");
const app = express ();

const port = process.env.PORT || 400;

app.listen(port);

app.get("/", (req,res) => {
    res.send("Initial page")
});

console.log(`listen on port ${port}`);