const Students = require("../Models/Students");

const addStudents = async (req, res) => {
  const { className, rollno } = req.body;
  const student = await Students.find({ className });
  console.log(className);
  const studentWithSameRoll = await student.find((value) => {
    return value.rollno === rollno;
  });
  if (studentWithSameRoll === undefined) {
    try {
      const response = await Students.create(req.body);
      res.status(201).json({
        status: "Success",
        data: response,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(200).json({
      status: "Failure",
      msg: `Student Of Class ${className} Already Exists With Roll Number ${rollno}`,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const response = await Students.find({});
    res.status(200).json({
      status: "Success",
      count: response.length,
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Students.findById({ _id: id });
    res.status(200).json({
      status: "Success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findStudentsByClassName = async (req, res) => {
  const { className } = req.params;

  try {
    const response = await Students.find({ className }).sort({ rollno: 1 });
    res.status(200).json({
      status: "Success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateFeeInfo = async (req, res) => {
  const { id } = req.params;
  const { feesPaid } = req.params;
  try {
    const response = await Students.findByIdAndUpdate(
      { _id: id },
      { feesPaid },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "Success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateFeeStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Students.findByIdAndUpdate(
      { _id: id },
      { isComplete: true },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "Success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findStudentsBySection = async (req, res) => {
  const { className } = req.params;
  const { section } = req.params;
  const response = await Students.find({ className });

  const sectionData = await response.find((value) => {
    return value.section === section;
  });
  if (response.length !== 0) {
    if (sectionData) {
      try {
        console.log(response);
        res.status(200).json({
          status: "Success",
          data: response,
        });
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.json({ status: "failure", msg: `Not Valid SectionName ${section}` });
    }
  } else {
    res.json({ status: "failure", msg: `Not Valid ClassName ${className}` });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Students.findByIdAndRemove({ _id: id });
    res.status(200).json({
      status: "Success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findStudentByName = async (req, res) => {
  const { firstName } = req.params;
  const Regex = new RegExp(firstName, "i");
  try {
    const response = await Students.find({
      $or: [
        {
          firstName: { $regex: Regex },
        },
        {
          lastName: { $regex: Regex },
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addStudents,
  getAllStudents,
  getAStudent,
  findStudentsByClassName,
  updateFeeInfo,
  updateFeeStatus,
  findStudentsBySection,
  deleteStudent,
  findStudentByName,
};
