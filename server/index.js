const express = require('express');
const cors = require('cors');
const app = express();
const pool = require("./db");

// middle ware
app.use(cors());
app.use(express.json());  // this will help us get req.body


// ROUTES
// create a todo

app.post('./todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error);
    }
})

// edit a todo
app.get("./todos", async (req, res) => {
    try{
      const alltodos = pool.query("SELECT * FROM todo");
      res.json(alltodos);
    }catch(error){
        console.log(error);
    }
})

// update a todo
app.put("./todo/:id", async (req, res) => {
    const { id } = res.params;
    const updated = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
})

// get a todo
app.get("./todos/:id", async(req, res) => {
   try {
       const { id } = req.params;
       const idTodo = pool.query("SELECT FROM todo WHERE todo_id = $1", [id]);
       res.json(idTodo);
   } catch (error) {
      console.log(error);
   }
});


// get all todo


app.listen(5000, () => {
    console.log('server is working');
});
