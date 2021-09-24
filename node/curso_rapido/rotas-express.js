const express = require('express');
const app = express();

app.get('/',(req,res) => {
    for(i = 0; i <= 10; i++) {
        res.write('<p> 2 x ' + i + ' = ' + (2*i) + '</p>');
    }
})

app.get('/contato',(req,res) => {
    res.json({nome:'teste'});
})

app.listen(8080)