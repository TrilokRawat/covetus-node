const mongoose = require('mongoose');

const Product = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        // category: [
        //    // {
        //    //  category : {
        //    //  type: String,
        //    //  required: true
        //    //  }
        //    //  }
        // ],
        category : {
            type: String,
            required: true,
            trim: true,
        },
        image: {
        	type: String
        },
        color: {
        	 type: String,
        	 required: true,
             trim: true,
        },
        sku: {
         	 type: String,
        	 required: true,
             trim: true,
        },
         origin : {
 			 type: String,
        	 required: true,
             trim: true,	
        }   
    },{
        timestamps: true
    }
)



const product = mongoose.model('product', Product);



module.exports = product;