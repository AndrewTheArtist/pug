const express = require('express')
const app  = express()

app.set('view engine', 'pug')

app.get('/', function (req, res){
    res.render('index', {
        title:'Hey',
        message:'日本の出生率は大幅に低下しています。'
    })
})

app.listen(4000, function (err){
    if(err){
        console.log(err)
    }else{
        console.log('Connection has been established on port 4000')
    }
})