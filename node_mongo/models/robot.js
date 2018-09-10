const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const RobotSchema = new Schema({
    name: {
        type: String,
        required: 'the robot name is required'
    },
    version: {
        type: Number,
        default: 2018
    },
    description:{
        trype: String
    },
    features: [{
        type: String,
        required: 'features are required',
        enum: ['Angular','React','Vue']
    }],
    isAvailable: {
        type: Boolean,
        default: false
    }
},
{
    timestamps : true
});

const Robot= mongoose.model('robot', RobotSchema);
module.exports = Robot;