import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../_actions/alert";
import { register } from "../../_actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChangeHandler = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="py-2">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 py-5 bg-primary text-white text-center ">
            <div className=" ">
              <div className="card-body">
                <img
                  src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                  style={{ width: "40%" }}
                  alt="User"
                />
                <h1 className="">Billing One</h1>
                <small className="text-light">
                  <i>
                    powered by{" "}
                    <Link to="" className="text-light">
                      globus labs{" "}
                    </Link>
                  </i>
                </small>
                <p className="lead pt-4">Alreay have an account? &nbsp;</p>
                <Link
                  to="/login"
                  className="btn btn-outline-light btn-block btn-lg"
                >
                  {" "}
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5 border">
            <h1 className="container">Sign Up...</h1>
            <p className="lead container pb-2">
              Create your Billing One account...
            </p>

            <form className="container" onSubmit={e => onSubmitHandler(e)}>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    name="name"
                    placeholder="Full Name"
                    className="form-control form-control-lg"
                    type="text"
                    value={name}
                    onChange={e => onChangeHandler(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    type="email"
                    value={email}
                    onChange={e => onChangeHandler(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    name="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    type="password"
                    value={password}
                    onChange={e => onChangeHandler(e)}
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    name="password2"
                    placeholder="Confirm Password"
                    className="form-control form-control-lg"
                    type="password"
                    value={password2}
                    onChange={e => onChangeHandler(e)}
                  />
                </div>
              </div>

              <div className="form-row">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
