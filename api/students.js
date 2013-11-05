var mongoose = require('mongoose');
var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
var make_upload_to_model = thumbnailPluginLib.make_upload_to_model;

///

// console.log(__dirname);
// var uploads_base = "./uploads";
// var uploads = path.join(uploads_base, "img");

///

var Student = mongoose.model('Student', new mongoose.Schema({
	name: String, 
	speed_pitch: String,
	skills: String,
	current_work: String,
	website: String,
	blog: String,
	linkedin: String,
	twitter: String
}));

Student.thumbnailPlugin, {
    	name: "photo",
    	format: "jpg",
    	size: 80,
    	inline: true,
    	save: true,
    	upload_to: make_upload_to_model('/uploads/img'),
    	relative_to: "/uploads"
		};

module.exports = Student;