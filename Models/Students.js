const { Schema, model } = require("mongoose");

const studenSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "FirstName Cannot Be Empty"],
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "LastName Cannot Be Empty"],
      trim: true,
    },
    contactNumber: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address Cannot Be Empty"],
      trim: true,
    },
    className: {
      type: String,
      required: [true, "ClassName Cannot Be Empty"],
      trim: true,
    },
    rollno: {
      type: String,
      required: [true, "Roll NO Cannot Be Empty"],
      trim: true,
    },
    section: {
      type: String,
      trim: true,
    },
    parentsName: {
      type: String,
      required: [true, "Parents Name Cannot Be Empty"],
      trim: true,
    },
    parentsContactNumber: {
      type: String,
      required: [true, "Parents Contact Number Cannot Be Empty"],
      trim: true,
    },
    feesPaid: {
      type: String,
      trim: true,
    },
    feesLeft: {
      type: String,
      trim: true,
    },
    feesTotal: {
      type: String,
      trim: true,
      required: [true, "Total fee is required"],
    },
    discount: {
      type: String,
      trim: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = new model("OverallStudentDataModelStdents", studenSchema);
