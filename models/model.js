
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NameSchema = new Schema({
    name: String
});

var Model = mongoose.model('Name', NameSchema);

module.exports = Model;