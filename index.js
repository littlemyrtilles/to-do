import express from "express";
import bodyParser from "body-parser";
import path from "path";


const app = express();
const port = 3000;

app.use(express.static(path.join(path.resolve(), "public")));
app.use(bodyParser.urlencoded({ extended: true }));

let todayTasks = [];
let workTasks = [];

app.get("/", (req, res) => {
    res.render("./index.ejs");
});

app.get("/today", (req, res) => {
    res.render("./today.ejs", {tasks: todayTasks});
});

app.get("/work", (req, res) => {
    res.render("./work.ejs", {tasks: workTasks});
});

app.post("/todayAddTask", (req, res) => {
    const newTask = req.body.newTask;
    if (newTask) {
        todayTasks.push(newTask);
    }
    res.redirect("/today");
});

app.post("/workAddTask", (req, res) => {
    const newTask = req.body.newTask;
    if (newTask) {
        workTasks.push(newTask);
    }
    res.redirect("/work");
});

app.get("/", (req, res) => {
    res.render(path.join(path.resolve(), "views", "today.ejs"), { tasks: todayTasks }); 
  });

app.get("/", (req, res) => {
    res.render(path.join(path.resolve(), "views", "work.ejs"), { tasks: workTasks }); 
  });

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});




