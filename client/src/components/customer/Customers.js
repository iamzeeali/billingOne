import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCustomers,
  deleteCustomer,
  setCurrentCustomer
} from "../../_actions/customer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner";
import FilterCustomers from "./FilterCustomers";

const Customers = ({
  getCustomers,
  deleteCustomer,
  setCurrentCustomer,
  customers,
  filtered,
  loading
}) => {
  useEffect(() => {
    getCustomers();
    //eslint-diable-next-line
  }, []);

  const onDeleteHandler = id => {
    deleteCustomer(id);
  };

  return (
    <Fragment>
      {customers !== null && !loading ? (
        <div>
          <div className="btn-group mb-4" role="group">
            <Link to="/" className="btn btn-primary">
              <i className="fa fa-arrow-left"> </i> Go Back
            </Link>
            <Link to="/addCustomer" className="btn btn-primary">
              <i className="fab fa-black-tie text-white" /> Add Customer
            </Link>
          </div>
          <h1 className="">Customers</h1>
          <FilterCustomers />
          <br />
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Customer Code</th>
                <th>Customer Name</th>
                <th>Contact Person</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered !== null
                ? filtered.map(customer => (
                    <tr key={customer._id}>
                      <td>{customer.cCode}</td>
                      <td>{customer.cName}</td>
                      <td>{customer.cPerson}</td>
                      <td>{customer.email}</td>
                      <td>{customer.mobile}</td>

                      <td>
                        <Link
                          to={`/editCustomer/${customer._id}`}
                          onClick={() => setCurrentCustomer(customer)}
                        >
                          <i className="far fa-edit fa-lg"></i>
                        </Link>{" "}
                        &nbsp; &nbsp;
                        <Link
                          to="#!"
                          onClick={() => onDeleteHandler(customer._id)}
                        >
                          <i className="far fa-trash-alt text-danger fa-lg"></i>
                        </Link>
                      </td>
                    </tr>
                  ))
                : customers.map(customer => (
                    <tr key={customer._id}>
                      <td>{customer.cCode}</td>
                      <td>{customer.cName}</td>
                      <td>{customer.cPerson}</td>
                      <td>{customer.email}</td>
                      <td>{customer.mobile}</td>
                      <td>
                        <Link
                          data-toggle="tooltip"
                          title="Edit"
                          data-html="true"
                          to={`/editCustomer/${customer._id}`}
                          onClick={() => setCurrentCustomer(customer)}
                        >
                          <i className="far fa-edit fa-lg"></i>
                        </Link>{" "}
                        &nbsp; &nbsp;
                        <Link
                          to="#!"
                          onClick={() => onDeleteHandler(customer._id)}
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

Customers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  setCurrentCustomer: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  customers: state.customer.customers,
  customer: state.customer.customer,
  filtered: state.customer.filtered,
  loading: state.customer.loading
});
export default connect(
  mapStateToProps,
  { getCustomers, deleteCustomer, setCurrentCustomer }
)(Customers);
