require('dotenv').config()

const express = require('express')
const app=express()
var cors = require('cors')
app.use(cors())

//0w8TWZzfCtj9TI2P
//import mongose
const mongoose=require('mongoose')

// mongoose.connect('mongodb+srv://mukhijagarvit:garvit@cluster0.hyrfreo.mongodb.net/sampledb?retryWrites=true&w=majority',{useNewUrlParser :true})
mongoose.connect('mongodb+srv://mukhijagarvit:0w8TWZzfCtj9TI2P@todo.j9p07un.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser :true})
const db=mongoose.connection

db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('Connected to database'))


//ab ye jo app bnya hai ispe kaam hoga
//isse taaki hum get aur post me json ka use kar payeee
app.use(express.json())
// 'localhost:3000/subscribers'


//setting up routes..
const subscriberRouter=require('./routes/task')
app.use('/task',subscriberRouter)

app.listen(3000,() => console.log("Server Started"))