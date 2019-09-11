import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCustomer } from "../../_actions/customer";

const AddCustomer = ({ addCustomer, history }) => {
  const [formData, setFormData] = useState({
    cCode: "",
    cName: "",
    crNumber: "",
    cPerson: "",
    email: "",
    mobile: "",
    phone: "",
    fax: "",
    shipAddress: "",
    shipCity: "",
    shipState: "",
    billAddress: "",
    billCity: "",
    billState: ""
  });

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
  } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addCustomer(formData, history);
  };

  return (
    <Fragment>
      <div className="form-title">
        <Link to="/customers" className="btn btn-primary">
          <i class="fa fa-arrow-left"> </i> Go Back
        </Link>
        <h1 className="pt-4">Add Customer</h1>
        <small className="lead">
          Welcome a new Customer to your company...
        </small>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Customer Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="C0001"
              name="cCode"
              value={cCode}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Customer Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Micro Distributors"
              name="cName"
              value={cName}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>C.R Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="GI00038389A"
              name="crNumber"
              value={crNumber}
              onChange={e => onChangeHandler(e)}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Contact Person</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
              name="cPerson"
              value={cPerson}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="info@micro.com"
              name="email"
              value={email}
              onChange={e => onChangeHandler(e)}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Mobile</label>
            <input
              type="number"
              className="form-control"
              placeholder="0919876543210"
              name="mobile"
              value={mobile}
              onChange={e => onChangeHandler(e)}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Phone</label>
            <input
              type="number"
              className="form-control"
              placeholder="06572345678"
              name="phone"
              value={phone}
              onChange={e => onChangeHandler(e)}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Fax</label>
            <input
              type="text"
              className="form-control"
              placeholder="Fax No"
              name="fax"
              value={fax}
              onChange={e => onChangeHandler(e)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Shipping Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Shipping Address"
              name="shipAddress"
              value={shipAddress}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Shipping City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mumbai"
              name="shipCity"
              value={shipCity}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Shipping State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Maharashtra"
              name="shipState"
              value={shipState}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Billing Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Billing Address"
              name="billAddress"
              value={billAddress}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Billing City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mumbai"
              name="billCity"
              value={billCity}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Billing State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Maharashtra"
              name="billState"
              value={billState}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

AddCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCustomer }
)(withRouter(AddCustomer));
