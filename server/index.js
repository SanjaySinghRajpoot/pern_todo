const express = require('express');
const cors = require('cors');
const app = express();
const pool = require("./db.js");

// middle ware
app.use(cors());
app.use(express.json());  // this will help us get req.body


// ROUTES

// create a new user
app.post('./createContact', async (req, res) => {
    try {
        const user = req.body;
        let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;
        const newdata = await pool.query(insertQuery);
        res.json(newdata);
    } catch (error) {
        console.log(error);
    }
})

// get all users
app.get("./allusers", async (req, res) => {
    try{
      const allusers = pool.query("SELECT * FROM users");
      res.json(allusers);
    }catch(error){
        console.log(error);
    }
})

// update user details
app.put("./updateContact/:id", async (req, res) => {
    let user = req.body;
    let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`
    const updated = await pool.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
})

// get a secific user
app.get("./getContact/:id", async(req, res) => {
   try {
       const { id } = req.params;
       const idcont = await pool.query("SELECT FROM contacts WHERE contact_id = $1", [id]);
       res.json(idcont);
   } catch (error) {
      console.log(error);
   }
});

app.delete('/deletecontact/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    const deleted_user = await pool.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
})


app.listen(5000, () => {
    console.log('server is working');
});
