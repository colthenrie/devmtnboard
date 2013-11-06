var mongoose = require('mongoose');
var path = require('path');
//fileplugin
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

//Thumbnail Plugin
var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
//var make_upload_to_model = thumbnailPluginLib.make_upload_to_model;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
var db = mongoose.connection;

var uploads_base = "../img";
var uploads = path.join(uploads_base, "users");

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
//File Plugin : https://github.com/panta/mongoose-file
StudentSchema.plugin(filePlugin, {
	name: "photo",
	type: "jpg",
	//upload_to: make_upload_to_model(uploads, 'photos'),
	relative_to: uploads
})

//Thumbnail Plugin : https://github.com/panta/mongoose-thumbnail
// StudentSchema.plugin(thumbnailPlugin, {
// 	name: "photo",
// 	format: "jpg",
// 	size: 96,
// 	inline: false,
// 	save: true,
	//upload_to: make_upload_to_model(uploads, 'photos'),
	//relative_to: uploads_base
//});

var Student = db.model("Student", StudentSchema)

module.exports = Student;

//var Student = mongoose.model('Student', new mongoose.Schema({