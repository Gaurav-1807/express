const express = require("express");
const app = express();
app.use(express.json());
const db = [
    {
        name: "test",
        grid: 1234,
        course: "frontend",
    }
]


app.get("/student", (req, res) => {
    res.status(200).send(db)
})
app.post("/student", (req, res) => {
    let newstudent = {
        name : req.body.name,
        grid : req.body.grid,
        course : req.body.course,
        id : db.length+1 
    }
    db.push(newstudent)
    res.status(200).send(newstudent)
})
app.patch("/student/:id", (req, res) => {
    res.send("enter student")   
    let {id} = req.params 
    
    let updatedStudent =db.filter(student => student.id == id)
    updatedStudent[0].name = req.body.name
    updatedStudent[0].grid = req.body.grid
    updatedStudent[0].course = req.body.course

    res.send(...updatedStudent)
})
app.delete("/student/:id", (req, res) => {
    let {id }= req.params 
    let deletestudents = db.filter(student => student.id != id)
    console.log(deletestudents)
    res.send(...deletestudents)
})



app.listen(8080, () => {

})