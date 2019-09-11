import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStaffs, deleteStaff, setCurrentStaff } from "../../_actions/staff";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner";
import FilterStaffs from "./FilterStaffs";

const Staff = ({
  getStaffs,
  deleteStaff,
  setCurrentStaff,
  staffs,
  filtered,
  loading
}) => {
  useEffect(() => {
    getStaffs();
    //eslint-diable-next-line
  }, []);

  const onDeleteHandler = id => {
    deleteStaff(id);
  };

  return (
    <Fragment>
      {staffs !== null && !loading ? (
        <div>
          <div className="btn-group mb-4" role="group">
            <Link to="/" className="btn btn-primary">
              <i class="fa fa-arrow-left text-white"> </i> Go Back
            </Link>
            <Link to="/addStaff" className="btn btn-primary">
              <i className="fab fa-black-tie text-white" /> Add Employee
            </Link>
          </div>
          <h1 className="">Employees</h1>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered !== null
                ? filtered.map(staff => (
                    <tr key={staff._id}>
                      <td>{staff.firstName + " " + staff.lastName}</td>
                      <td>{staff.email}</td>
                      <td>{staff.mobile}</td>
                      <td>{staff.username}</td>
                      <td>Logged Out</td>
                      <td>
                        <Link
                          title="Edit"
                          to={`/editStaff/${staff._id}`}
                          onClick={() => setCurrentStaff(staff)}
                        >
                          <i className="far fa-edit fa-lg"></i>
                        </Link>{" "}
                        &nbsp; &nbsp;
                        <Link
                          title="Delete"
                          to="#!"
                          onClick={() => onDeleteHandler(staff._id)}
                        >
                          <i className="far fa-trash-alt text-danger fa-lg"></i>
                        </Link>
                      </td>
                    </tr>
                  ))
                : staffs.map(staff => (
                    <tr key={staff._id}>
                      <td>{staff.firstName + " " + staff.lastName}</td>
                      <td>{staff.email}</td>
                      <td>{staff.mobile}</td>
                      <td>{staff.username}</td>
                      <td>Logged Out</td>
                      <td>
                        <Link
                          title="Edit"
                          to={`/editStaff/${staff._id}`}
                          onClick={() => setCurrentStaff(staff)}
                        >
                          <i className="far fa-edit fa-lg"></i>
                        </Link>{" "}
                        &nbsp; &nbsp;
                        <Link
                          title="Delete"
                          to="#!"
                          onClick={() => onDeleteHandler(staff._id)}
                        >
                          <i className="far fa-trash-alt text-danger fa-lg"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Staff.propTypes = {
  getStaffs: PropTypes.func.isRequired,
  deleteStaff: PropTypes.func.isRequired,
  setCurrentStaff: PropTypes.func.isRequired,
  staffs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  staffs: state.staff.staffs,
  staff: state.staff.staff,
  filtered: state.staff.filtered,
  loading: state.staff.loading
});
export default connect(
  mapStateToProps,
  { getStaffs, deleteStaff, setCurrentStaff }
)(Staff);
