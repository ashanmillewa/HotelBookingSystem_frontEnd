// const mongoose = require("mongoose");

// var mongoURL = 'mongodb+srv://ASHAN:11AIM2000@cluster0.knpswim.mongodb.net/hotel-rooms'

// mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser:true})

// var connection = mongoose.connection

// connection.on('error', ()=> {
//     console.log('Mongo DB Connection failed')
// })

// connection.on('connected', ()=> {
//     console.log('Mongo DB Connection Successful')
// })




// module.exports = mongoose


const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://ASHAN:11AIM2000@cluster0.knpswim.mongodb.net/hotel-rooms';

mongoose.connect(mongoURL)
  .then(() => console.log('Mongo DB Connection Successful'))
  .catch((err) => console.log('Mongo DB Connection failed', err));

  

module.exports = mongoose;
