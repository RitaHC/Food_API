// const express = require('express')
// const app = express()
// const port = 3000
// let food = require('../../data.js')


// // Middleware to parse JSON
// app.use(express.json())

// // Sample data

// // ROUTES

// // 1. GET Route
// app.get('/', (req,res) => {
//     console.log("----- Get All Food Items -------")
//     res.json(food)
// })

// // GET ONE
// app.get('/:name', (req,res)=> {
//     console.log("---- Get One Info ------")
//     console.log("Req", req.params)
//     // Get the name
//     const name = req.params.name.toLowerCase()
//     // Now compare
//     const f = food.find(f => f.name.toLowerCase() == name)

//     if (f) {
//         console.log('**** FOUND ****')
//         res.json(f)
//     } else {
//         console.log("***** NOT FOUND ******")
//         res.status(400).json({ message: "Food Item not found" })
//     }
// })

// // Start the server
// app.listen(port, () => {
//     console.log(`%c Server is listening at http://localhost:${port}`, 'color: red')
// })


// // Source for name and images
// // https://ospi.k12.wa.us/sites/default/files/2023-08/vegetablesa-z.pdf
// // https://www.authenticindiatours.com/2024/10/31/indian-vegetables/



// const food = require('../../data.js'); // Adjust path as it's inside functions

// exports.handler = async (event) => {
//     const path = event.path.split('/').pop(); // Get last part of URL

//     if (path === 'food') {
//         return {
//             statusCode: 200,
//             body: JSON.stringify(food),
//         };
//     }

//     // Search for specific food item
//     const name = path.toLowerCase();
//     const f = food.find((item) => item.name.toLowerCase() === name);

//     if (f) {
//         return {
//             statusCode: 200,
//             body: JSON.stringify(f),
//         };
//     } else {
//         return {
//             statusCode: 404,
//             body: JSON.stringify({ message: 'Food item not found' }),
//         };
//     }
// };


const food = require('../../data.js'); // Adjust path as needed

module.exports.handler = async function(event, context) {
  const path = event.path.split('/').pop(); // Get last part of URL

  if (path === 'food') {
    // Get all food items
    return {
      statusCode: 200,
      body: JSON.stringify(food),
    };
  }

  // Get specific food item
  const name = path.toLowerCase();
  const f = food.find((item) => item.name.toLowerCase() === name);

  if (f) {
    return {
      statusCode: 200,
      body: JSON.stringify(f),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Food item not found' }),
    };
  }
};
