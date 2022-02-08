const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

savedChar= []

app.post('/api/save', (req, res)=>{
    console.log(req.body)
    savedChar.push(req.body)
    console.log(savedChar)
    res.status(200).send(savedChar)
    })


app.get('/api/example', (req, res)=>{
    let randomIndex = Math.floor(Math.random() * savedChar.length);
  let randomChar = savedChar[randomIndex];
    res.status(200).send(randomChar)
})

app.listen(4000, ()=> console.log('server running on 4000'))