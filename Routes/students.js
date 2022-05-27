const router = require("express").Router();
const {
  addStudents,
  getAllStudents,
  getAStudent,
  findStudentsByClassName,
  updateFeeInfo,
  updateFeeStatus,
  findStudentsBySection,
  deleteStudent,
  findStudentByName,
} = require("../Controllers/students");

router.post("/students", addStudents);
router.get("/students", getAllStudents);
router.get("/student/:id", getAStudent);
router.get("/students/class/:className", findStudentsByClassName);
router.get("/students/section/:className/:section", findStudentsBySection);
router.put("/student/fees/:id/:fees", updateFeeInfo);
router.put("/student/status/:id/", updateFeeStatus);
router.get("/student/name/:firstName", findStudentByName);
router.delete("/student/delete/:id/", deleteStudent);

module.exports = router;
