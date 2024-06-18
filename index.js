const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/user',(req,res)=>{
    res.json({"name":"fast"})
})
 


app.listen(3000)
console.log("server on port " ,3000 )
