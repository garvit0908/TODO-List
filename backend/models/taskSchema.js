const mongoose=require('mongoose')

// schema
const taskSchema=new mongoose.Schema({
    tas:{
        type:String,
        required:true

    },
})



//ye naam subscriber kha se aaaya

module.exports=mongoose.model('task',taskSchema)
