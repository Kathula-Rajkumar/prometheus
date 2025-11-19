import express from "express";
import client from "prom-client";
import { requestCount } from "./monitoring/requestCount";

const app = express();

app.use(express.json());

app.use(requestCount);


//app.get("/user", async(req, res) => {
//    res.send({
//        name: "John Doe",
//        age: 25,
//    });
//});

//app.post("/user", (req, res) => {
//    const user = req.body;
 //   res.send({
 //       ...user,
 //       id: 1,
//    });
//});

app.get("/user", (req, res) => {
    let users = {
        name :"Rajkumar",
        age : 24
    }
    res.json({
        name : "Rajkumar"
    })
})

app.post("/user", (req, res) => {
    res.json({
        name : "Rajkumar"
    })
})
//playing with branches and pr ...

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})


app.listen(3000);