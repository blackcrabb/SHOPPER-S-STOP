const express=require('express')
const app=express();
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./route/api').route)
app.listen(5674,()=>{console.log("Running at local host 5674")})
