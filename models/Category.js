var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required:true,
        default:"fruits"
    },
   isActive:{
    type:Boolean,
    default:true
}
});


// Export the model
module.exports = mongoose.model('Category', categorySchema);