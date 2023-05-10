//ab hum bnynge routes taki get aur post method se data jaaa sakeee
const express = require('express')
const router = express.Router()

const task = require('../models/taskSchema')

// //Getting all
router.get('/', async (req, res) => {
    try {
        const subscriber = await task.find()
        res.json(subscriber)

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})


// //Getting one
// router.get('/:name', async (req, res) => {
//     try {
//         const subscriber = await Subscriber.find({name: req.params.name})
//         res.json(subscriber)
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// Creating  one
router.post('/', async (req, res) => {
    const newsub = new task({
        tas: req.body.tas,
        // age: req.body.age
    })
    try {
        const newSubscriber = await newsub.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
})

// // //Updating one
// router.patch('/:name',getStudent, async (req, res) => {
//     if(req.name!=NULL)
//     {
//         res.subscriber.name=req.body.name   
//     }
    

// })

router.delete('/:id', async (req, res) => {
    try{
        let t = await task.findByIdAndDelete(req.params.id)
        // console.log(t)
        res.json({message : 'Successfully deleted'})
    } catch(err){
        res.status(500).json({message : err.message})
    }
})

// async function getStudent(req,res,next)
// {
//     let subs
//     try{
//         subs =await Subscriber.find({name:req.params.name})
//         if(student==NULL)
//         {
//             res.status(404).json({message:"Student not found"})
//         }
//     }
//     catch(err)
//     {
//         res.status(299).json({message :err.message})
//     }
//     res.name=subs
//     next()
// }


module.exports = router

// let name;
// fetch(`http://localhost:3000/subscribers/${i}`)
// .then(res => res.json())
// .then(data => {
//     name = data;
//     console.log(name)
// })