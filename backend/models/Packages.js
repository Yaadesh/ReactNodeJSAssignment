const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    id:{type:Number,required:true},
    place:{type:String,required:true}
})
const PackageSchema = new Schema({

    id:{
        type:Number,
        required:true
    },

    source:{
        type:String,
        required:false
    },

    destination:
    [{type:Schema.Types.ObjectId,
        ref: 'Destination', 
    required:false}]

});
const Destination = mongoose.model('destination',DestinationSchema);

const Package = mongoose.model('packages', PackageSchema);
module.exports = Package;
module.exports = Destination;