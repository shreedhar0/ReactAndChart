const UserModel = require('../models/students')
const StudentModel = require('../models/student_data');

const getStudent = (req, res) => {
    UserModel.find().then(
        students => res.json(students)
    ).catch(
        (err) => {
            console.log(err);
        }
    )
}

const registerStudent = (req, res) => {
    const student_model = StudentModel({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email
    })
    student_model.save()
    .then(() => {
      res.status(200).json({ message: "Data saved successfully!" }
      );
    })
    .catch((error) => {
      res.status(500).json({ error: "Error saving data to database." });
    });
}

module.exports = {
    getStudent,
    registerStudent
}