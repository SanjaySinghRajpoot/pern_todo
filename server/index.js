const express = require('express');
const cors = require('cors');
const app = express();

// middle ware
app.use(cors());


app.listen(5000, () => {
    console.log('server is working');
})
