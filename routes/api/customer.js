const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Customer = require("../../models/Customer");

// @route    GET api/customer
// @desc     Get all users customers
// @access   private
router.get("/", auth, async (req, res) => {
  try {
    const customers = await Customer.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/customer/:id
// @desc     Get customer by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ msg: "Customer not found" });
    }

    // Make sure user owns customer
    if (customer.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    res.json(customer);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Customer not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    POST api/customer
// @desc     Add new customer
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("cCode", "Customer Code is required")
        .not()
        .isEmpty(),
      check("cName", "Customer Name is required")
        .not()
        .isEmpty(),
      check("shipAddress", "Shipping Address is required")
        .not()
        .isEmpty(),
      check("shipCity", "Shipping City is required")
        .not()
        .isEmpty(),
      check("shipState", "Shipping State is required")
        .not()
        .isEmpty(),
      check("billAddress", "Billing Address is required")
        .not()
        .isEmpty(),
      check("billCity", "Billing City is required")
        .not()
        .isEmpty(),
      check("billState", "Billing State is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newCustomer = new Customer({
        cCode: req.body.cCode,
        cName: req.body.cName,
        crNumber: req.body.crNumber,
        cPerson: req.body.cPerson,
        email: req.body.email,
        mobile: req.body.mobile,
        phone: req.body.phone,
        fax: req.body.fax,
        shipAddress: req.body.shipAddress,
        shipCity: req.body.shipCity,
        shipState: req.body.shipState,
        billAddress: req.body.billAddress,
        billCity: req.body.billCity,
        billState: req.body.billState,
        user: req.user.id
      });

      const customer = await newCustomer.save();

      res.json(customer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     PUT api/customer/:id
// @desc      Update customer
// @access    Private
router.put("/:id", auth, async (req, res) => {
  const {
    cCode,
    cName,
    crNumber,
    cPerson,
    email,
    mobile,
    phone,
    fax,
    shipAddress,
    shipCity,
    shipState,
    billAddress,
    billCity,
    billState
  } = req.body;

  // Build contact object
  const customerFields = {};
  if (cCode) customerFields.firstName = cCode;
  if (cName) customerFields.cName = cName;
  if (crNumber) customerFields.crNumber = crNumber;
  if (cPerson) customerFields.cPerson = cPerson;
  if (email) customerFields.email = email;
  if (mobile) customerFields.mobile = mobile;
  if (phone) customerFields.phone = phone;
  if (fax) customerFields.fax = fax;
  if (shipAddress) customerFields.shipAddress = shipAddress;
  if (shipCity) customerFields.shipCity = shipCity;
  if (shipState) customerFields.shipState = shipState;
  if (billAddress) customerFields.billAddress = billAddress;
  if (billCity) customerFields.billCity = billCity;
  if (billState) customerFields.billState = billState;

  try {
    let customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).json({ msg: "Customer not found" });

    // Make sure user owns customer
    if (customer.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    customer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: customerFields },
      { new: true }
    );

    res.json(customer);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/customer/:id
// @desc      Delete customer
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).json({ msg: "Customer not found" });

    // Make sure user owns customer
    if (customer.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Customer.findByIdAndRemove(req.params.id);

    res.json({ msg: "Customer removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
