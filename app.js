const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const items = ["Buy Food", "Cook Food" , "Eat Food"];
const workItems = [];
const day = require("./date")

//Initializing
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));


// Root Route
app.get('/', (req, res) => {
  res.render("list" , {listTitle: day , newItems: items });
});


// Root post 
app.post("/" , (req,res) => {
    const item = req.body.todoItem;
    if(req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work")
    } else {

      items.push(item);
    res.redirect("/");
    }
})


// work Route
app.get("/work" , (req,res) => {
   res.render("list" ,{ listTitle: "Work List" , newItems: workItems })
})


// About Route
app.get("/about", (req,res) => {
  res.render("about")
})


// listening to port...
app.listen(PORT, () => {
  console.log('Server is running.....');
});

