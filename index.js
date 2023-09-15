const express= require("express");
const app = express();
app.use(express.json());

app.get("/",(req, res) => {
    res.status(200).send("Welcome to Index Page")
})
app.get("/signup",(req, res) => {
    res.status(200).send("Welcome to Signup Page")
})
app.get("/login",(req, res) => {
    res.status(200).send("Welcome to Login Page")
})

app.post("/signup",(req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/login",(req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/index",(req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/students",(req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})



app.listen(8080,()=>{
 
})