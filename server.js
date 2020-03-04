const express = require('express');

const app = express();

//middleware
app.use((req, res, next) => {
    console.log('<h1>hellooo</h1>')
    //Express then goes to the routes below.
    next();
})

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.get('/profile', (req, res) => {
    res.send("getting profile")
})

app.post('/profile', (req, res) =>{
    const user = {
        name: "sally",
        hobby: "soccer"
    }
    res.send(user)
})
app.get('/', (req, res) => {
    const user = {
        name: "sally",
        hobby: "soccer"
    }

    res.send(user)
})


app.listen(3000);

