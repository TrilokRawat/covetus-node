const mongoose = require('mongoose');

const category = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
    
    },{
        timestamps: true
    }
)



const cat = mongoose.model('category', category);



module.exports = cat;