const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/balance", (req, res)=> {
    res.send(balance.toString());
})

app.get("/withdraw", (req, res) => {
    const amountToWithdraw = req.body.amountToWithdraw;
})

app.listen(3000, () => {
    console.log("We're up and running");
})

// export default function balance () {
//     function getBalance() {
//         console.log("get balance");
//     }
//      function withdraw() {
//             console.log("withdrawal");
//         }
//      function deposit() {
//             console.log("deposit");
//         }
//     }