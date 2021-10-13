require('dotenv/config');
const express = require('express')
const app = express()
const cors = require('cors')
const movieModel = require('./src/models/movieModel');
app.use(cors())


app.get('/trending', async(req, res) => {
    const movie = await movieModel.getTrending()
    if (movie == undefined) {
        res.status(400).send()
    } else {
        res.status(200).send(movie)
    }    
}) 


app.listen(4567, function(){
    console.log('APP rodando na porta 4567');
  });