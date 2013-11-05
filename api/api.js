var Student = require ('./students.js');

module.exports.listStudents = function(req, res) {
	var query ={};
	Student.find({}, function (err, users) {
        res.send(JSON.stringify(users));
    });

};

module.exports.saveStudent = function(req, res){
	var newStudent = new Student({
		name: req.body.name, 
		speed_pitch: req.body.speed_pitch,
		skills: req.body.skills,
		current_work: req.body.current_work,
		website: req.body.website,
		blog: req.body.blog,
		linkedin: req.body.linkedin,
		twitter: req.body.twitter,
	});
	newStudent.picture.set('photo.file', req.files.photo);
	newStudent.save(function(err) {
		res.send("This was posted");
	});
};