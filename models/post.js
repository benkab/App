var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var schema  = new Schema({
    content : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: false
    },
    created_at : {
        type: Date,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref : 'User'
    }
});

module.exports = mongoose.model('Post', schema);