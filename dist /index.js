"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//@ts-ignore
function middleware(req, res, next) {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log("Total time taken: ", endTime - startTime, "ms");
}
app.use(middleware);
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
        name: "Rajkumar",
        age: 24
    };
    res.json({
        name: "Rajkumar"
    });
});
app.post("/user", (req, res) => {
    res.json({
        name: "Rajkumar"
    });
});
app.listen(3000);
