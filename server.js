const express = require('express')
const app = express()
const port = 3000
let food = require('./data.js')


// Middleware to parse JSON
app.use(express.json())

// Sample data

// ROUTES

// 1. GET Route
app.get('/', (req,res) => {
    console.log("----- Get All Food Items -------")
    res.json(food)
})

// GET ONE
app.get('/:name', (req,res)=> {
    console.log("---- Get One Info ------")
    console.log("Req", req.params)
    // Get the name
    const name = req.params.name.toLowerCase()
    // Now compare
    const f = food.find(f => f.name.toLowerCase() == name)

    if (f) {
        console.log('**** FOUND ****')
        res.json(f)
    } else {
        console.log("***** NOT FOUND ******")
        res.status(400).json({ message: "Food Item not found" })
    }
})

// Start the server
app.listen(port, () => {
    console.log(`%c Server is listening at http://localhost:${port}`, 'color: red')
})


// Source for name and images
// https://ospi.k12.wa.us/sites/default/files/2023-08/vegetablesa-z.pdf
// https://www.authenticindiatours.com/2024/10/31/indian-vegetables/
