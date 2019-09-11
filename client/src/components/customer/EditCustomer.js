import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCustomer, getCurrentCustomer } from "../../_actions/customer";

const EditCustomer = ({
  customer: { customer, loading },
  editCustomer,
  getCurrentCustomer,
  history,
  match
}) => {
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

  useEffect(() => {
    getCurrentCustomer(match.params.id);
    setFormData({
      cCode: loading || !customer.cCode ? "" : customer.cCode,
      cName: loading || !customer.cName ? "" : customer.cName,
      crNumber: loading || !customer.crNumber ? "" : customer.crNumber,
      cPerson: loading || !customer.cPerson ? "" : customer.cPerson,
      email: loading || !customer.email ? "" : customer.email,
      mobile: loading || !customer.mobile ? "" : customer.mobile,
      phone: loading || !customer.phone ? "" : customer.phone,
      fax: loading || !customer.fax ? "" : customer.fax,
      shipAddress: loading || !customer.shipAddress ? "" : customer.shipAddress,
      shipCity: loading || !customer.shipCity ? "" : customer.shipCity,
      shipState: loading || !customer.shipState ? "" : customer.shipState,
      billAddress: loading || !customer.billAddress ? "" : customer.billAddress,
      billCity: loading || !customer.billCity ? "" : customer.billCity,
      billState: loading || !customer.billState ? "" : customer.billState
    });
  }, [loading, getCurrentCustomer, setFormData]);

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
    editCustomer(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="form-title">
        <Link to="/customers" className="btn btn-primary">
          <i class="fa fa-arrow-left"> </i> Go Back
        </Link>
        <br />
        <br />
        <div class="jumbotron container bg-primary text-white p-2">
          <div class="container text-center">
            <img
              src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/23651/large_thumb_stage.jpg"
              alt="..."
              className="rounded-circle img-thumbnail"
              width="150px"
              height="150px"
            />
            <h1 class="display-4">{cName}</h1>
            <small>
              <i className="fa fa-map-marker"> </i> {billCity}, {billState}
            </small>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmitHandler} className="container">
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

EditCustomer.propTypes = {
  editCustomer: PropTypes.func.isRequired,
  getCurrentCustomer: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customer: state.customer
});

export default connect(
  mapStateToProps,
  { editCustomer, getCurrentCustomer }
)(withRouter(EditCustomer));
