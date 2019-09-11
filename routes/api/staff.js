const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Staff = require("../../models/Staff");

// @route    GET api/staff
// @desc     Get all users staffs
// @access   private
router.get("/", async (req, res) => {
  try {
    const staffs = await Staff.find().sort({ date: -1 });
    res.json(staffs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/staff/:id
// @desc     Get staff by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(404).json({ msg: "Staff not found" });
    }

    res.json(staff);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Staff not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    POST api/staff
// @desc     Add new staff
// @access   Private
router.post(
  "/",
  [
    [
      check("firstName", "First Name is required")
        .not()
        .isEmpty(),
      check("lastName", "Last Name is required")
        .not()
        .isEmpty(),
      check("username", "Username is required")
        .not()
        .isEmpty(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
      check(
        "password2",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
      check("mobile", "Mobile is required")
        .not()
        .isEmpty(),
      check("email", "Please include a valid email").isEmail()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newStaff = new Staff({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        password2: req.body.password2,
        mobile: req.body.mobile,
        email: req.body.email
      });

      const staff = await newStaff.save();

      res.json(staff);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     PUT api/staff/:id
// @desc      Update staff
// @access    Private
router.put("/:id", auth, async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    password,
    password2,
    mobile,
    email
  } = req.body;

  // Build contact object
  const staffFields = {};
  if (firstName) staffFields.firstName = firstName;
  if (lastName) staffFields.lastName = lastName;
  if (username) staffFields.username = username;
  if (password) staffFields.password = password;
  if (password2) staffFields.password = password2;
  if (mobile) staffFields.mobile = mobile;
  if (email) staffFields.email = email;

  try {
    let staff = await Staff.findById(req.params.id);

    if (!staff) return res.status(404).json({ msg: "Staff not found" });

    staff = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: staffFields },
      { new: true }
    );

    res.json(staff);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/staff/:id
// @desc      Delete staff
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let staff = await Staff.findById(req.params.id);

    if (!staff) return res.status(404).json({ msg: "Staff not found" });

    await Staff.findByIdAndRemove(req.params.id);

    res.json({ msg: "Staff removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
