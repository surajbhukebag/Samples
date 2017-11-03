// grab the things we need
var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/members");

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
	id: String,
	name : String,
	username : {
		type : String,
		required : true,
		unique : true
	},
	password : {
		type : String,
		required : true
	}
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Member', userSchema);

// make this available to our users in our Node applications
module.exports = User;