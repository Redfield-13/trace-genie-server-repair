const express = require('express')
const database = require('./database')
const app = express()
const port = 4000
const cors = require("cors");


app.use(cors());

app.get('/postcodes', (req, res) => {
  const postcode = req.query.postcode
  database.getCustomersOnPostCode(postcode).then(result =>{
    res.send(result)
  })
})
app.get('/postcode&address',(req, res)=>{
  const postcode = req.query.postcode
  const address = req.query.address
  database.getCustomersOnPostCodeAndAddress(postcode, ' '+address).then(result =>{
    res.send(result)
  })
})

app.get('/name&town',(req, res)=>{
  const name = req.query.name
  const town = req.query.town
  database.getCustomersOnNameAndTown(name+'', town).then(result =>{
    res.send(result)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})