import React, { Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import { getStaffs } from "../../_actions/staff";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner";
import FilterStaffs from "./FilterStaffs";

const Staff = ({ getStaffs, staffs, filtered, loading }) => {
  useEffect(() => {
    getStaffs();
    //eslint-diable-next-line
  }, []);

  return (
    <Fragment>
      {staffs !== null && !loading ? (
        <TransitionGroup>
          <div className="btn-group mb-4" role="group">
            <Link to="/" className="btn btn-dark">
              Go Back
            </Link>
            <Link to="/addStaff" className="btn btn-primary">
              Add Staff
            </Link>
          </div>
          <h1 className="">Staffs</h1>
          <FilterStaffs />
          <br />
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered !== null
                ? filtered.map(staff => (
                    <CSSTransition
                      key={staff._id}
                      timeout={500}
                      classNames="item"
                    >
                      <tr>
                        <td>{staff.firstName + " " + staff.lastName}</td>
                        <td>{staff.email}</td>
                        <td>{staff.mobile}</td>
                        <td>{staff.username}</td>
                        <td>Logged Out</td>
                      </tr>
                    </CSSTransition>
                  ))
                : staffs.map(staff => (
                    <CSSTransition
                      key={staff._id}
                      timeout={500}
                      classNames="item"
                    >
                      <tr>
                        <td>{staff.firstName + " " + staff.lastName}</td>
                        <td>{staff.email}</td>
                        <td>{staff.mobile}</td>
                        <td>{staff.username}</td>
                        <td>Logged Out</td>
                      </tr>
                    </CSSTransition>
                  ))}
            </tbody>
          </table>
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Staff.propTypes = {
  getStaffs: PropTypes.func.isRequired,
  staffs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  staffs: state.staff.staffs,
  filtered: state.staff.filtered,
  loading: state.staff.loading
});
export default connect(
  mapStateToProps,
  { getStaffs }
)(Staff);
