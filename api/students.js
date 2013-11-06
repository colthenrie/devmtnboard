var mongoose = require('mongoose');
var thumbnailPluginLib = require('mongoose-thumbnail');
var path = require('path');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
var make_upload_to_model = thumbnailPluginLib.make_upload_to_model;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
var db = mongoose.connection;

var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "img");

var StudentSchema = new mongoose.Schema({
	name: String, 
	speed_pitch: String,
	skills: String,
	current_work: String,
	website: String,
	blog: String,
	linkedin: String,
	twitter: String
});

StudentSchema.plugin(thumbnailPlugin, {
	name: "photo",
	format: "jpg",
	size: 96,
	inline: true,
	save: true,
	upload_to: make_upload_to_model(uploads, 'photos'),
	relative_to: uploads_base
});

var Student = db.model("Student", StudentSchema)

module.exports = Student;

//var Student = mongoose.model('Student', new mongoose.Schema({