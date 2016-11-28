var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var schema  = new Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    firstname : {
        type: String,
        required: true
    },
    avatar : {
        type: String,
        required: false,
        default: "user-default.png"
    },
    description : {
        type: String,
        required: false,
        default: "No description entered yet!"
    },
    actived : {
        type: Boolean,
        required: true
    }
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);