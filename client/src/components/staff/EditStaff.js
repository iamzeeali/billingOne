import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editStaff, getCurrentStaff } from "../../_actions/staff";

const EditStaff = ({
  staff: { staff, loading },
  editStaff,
  getCurrentStaff,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    password2: "",
    mobile: "",
    email: ""
  });

  useEffect(() => {
    getCurrentStaff(match.params.id);
    setFormData({
      firstName: loading || !staff.firstName ? "" : staff.firstName,
      lastName: loading || !staff.lastName ? "" : staff.lastName,
      username: loading || !staff.username ? "" : staff.username,
      password: loading || !staff.password ? "" : staff.password,
      password2: loading || !staff.password2 ? "" : staff.password2,
      mobile: loading || !staff.mobile ? "" : staff.mobile,
      email: loading || !staff.email ? "" : staff.email
    });
  }, [loading, getCurrentStaff]);

  const {
    firstName,
    lastName,
    username,
    password,
    password2,
    mobile,
    email
  } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editStaff(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="form-title">
        <Link to="/staffs" className="btn btn-primary">
          <i class="fa fa-arrow-left"> </i> Go Back
        </Link>
        <br />
        <br />
        <div class="jumbotron container bg-primary text-white p-2">
          <div class="container text-center">
            <img
              src="https://99wtf.net/wp-content/uploads/2018/05/professional-short-hairstyles-for-men-with-thick-hair-and-square-face.jpg?ezimgfmt=rs:352x352/rscb1"
              alt="..."
              className="rounded-circle img-thumbnail"
              width="150px"
              height="150px"
            />
            <h1 class="display-4">{firstName + " " + lastName}</h1>
            <small>
              <i className="fa fa-envelope"> </i> {email} &nbsp;&nbsp;
              <i className="fa fa-mobile"> </i> {mobile}
            </small>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John"
              name="firstName"
              value={firstName}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Smith"
              name="lastName"
              value={lastName}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="johnsmith"
              name="username"
              value={username}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="******"
              name="password"
              value={password}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Repeat Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*******"
              name="password2"
              value={password2}
              onChange={e => onChangeHandler(e)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Mobile</label>
            <input
              type="number"
              className="form-control"
              placeholder="123-456-789"
              name="mobile"
              value={mobile}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="john@gmail.com"
              name="email"
              value={email}
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

EditStaff.propTypes = {
  editStaff: PropTypes.func.isRequired,
  getCurrentStaff: PropTypes.func.isRequired,
  staff: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  staff: state.staff
});

export default connect(
  mapStateToProps,
  { editStaff, getCurrentStaff }
)(withRouter(EditStaff));
