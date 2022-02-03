// importacion
const mongoose = require("mongoose")



//schema

const bookSchema = mongoose.Schema({
    title: {
        type:       String,
        required:   true
    },

    description: {
        type:       String,
        required:   true
    },

    author: {
        type:       String,
        required:   true
    },

    rating: {
        type:       Number,
        required:   true
    } 

})


// modelo
const Book= mongoose.model("Book", bookSchema)


//exportacion
module.exports=Book