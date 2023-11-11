const mongoose = require('mongoose')
const schema = mongoose.Schema

const Itineraryschema = new schema({
        name: {
            type:String,
        },
            date: {
            start:{
                type:String
            },
            end:{
                type:String
            },
        },
        
        user: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'User'
    },
    destination: {
        default: [],
        type: [
          {
            city: {
              type: String,
            },
            country: {
              type: String,
            },
            arrivalDate: {
              type: String, 
            },  
            departureDate: {
              type: String,
            },
          },
        ],
    },
    
    activities: {
        default: [],
        type: [
          {
           name: {
              type: String,
            },
            date: {
              type: String,
            },
            location: {
              type: String,
            },
          },
        ],
      },
    transportation: {
        default: [],
        type: [
          {   
           mode: {
              type: String,
            },
            details: {
              type: String,
            },
            departureDate: {
              type: String,
            },
            arrivalDate: {
              type: String,
            },
          },
        ],
    },
  
    accomodation: {
        default: [],
        type: [
          {
           name: {
              type: String,
            },
            checkInDate: {  
              type: String,
            },
            checkoutDate: {
              type: String,
            },
            address: {
              type: String,
            },
          },
        ],
      },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const ItineraryModel = mongoose.model('Itinerary', Itineraryschema )
module.exports = {
    ItineraryModel
}