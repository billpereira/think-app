require('dotenv')
const express = require('express');

const PORT = process.env.PORT || 3333

const app = express()

app.get('/api',(req,res)=>{
  return res.json({message:'Hello World'})
})

app.listen(PORT,()=>{
  console.log(`App listening on port ${PORT}`)
})