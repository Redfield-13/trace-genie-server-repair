const express = require('express')
const database = require('./database')
const app = express()
const port = 4000

app.get('/postcodes', (req, res) => {
  database.getCustomersOnPostCode('AB10 1QQ').then(result =>{
    res.send(result)
  })
})
app.get('/postcode&address',(req, res)=>{
    database.getCustomersOnPostCodeAndAddress('AB10 1QQ', ' 3C SKENE PLACE').then(result =>{
        res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})