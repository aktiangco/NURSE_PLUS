const mongoose = require('mongoose')

let reservationSchema = new mongoose.Schema({

    reserve: { 
        type: Boolean, 
        default: false 
    },
})
  
module.exports = mongoose.model('Reservation', reservationSchema)
