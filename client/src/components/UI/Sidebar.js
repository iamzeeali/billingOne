//Theme used: https://bootsnipp.com/snippets/Q0dAX
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../_actions/auth";

class Sidebar extends Component {
  onLogoutHandler(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark border-bottom border-secondary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h2>Billing One</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to=""
                    onClick={this.onLogoutHandler.bind(this)}
                  >
                    <i className="fa fa-power-off" /> Logout
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="page-wrapper chiller-theme toggled">
          <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
            <i className="fas fa-bars"></i>
          </Link>
          <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-brand">
                <Link to="/dashboard" className="lead">
                  Globus Labs
                </Link>
                <div id="close-sidebar">
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <div className="sidebar-header">
                <div className="user-pic">
                  <img
                    className="img-responsive"
                    src="https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
                    alt="User"
                  />
                </div>

                <div className="user-info">
                  <span className="user-name">{user.name}</span>

                  <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                  </span>
                </div>
              </div>

              <div className="sidebar-menu">
                <ul>
                  <li className="header-menu">
                    <span>Menu</span>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <i className="fa fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/staffs">
                      <i className="fab fa-black-tie"></i>
                      <span>Employees</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/customers">
                      <i className="fa fa-book"></i>
                      <span>Customers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-book"></i>
                      <span>Vendors</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-book"></i>
                      <span>Items</span>
                    </Link>
                  </li>
                  <li className="sidebar-dropdown">
                    <Link to="#">
                      <i className="fa fa-tachometer-alt"></i>
                      <span>Enquiry</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="#">
                            Dashboard 1
                            <span className="badge badge-pill badge-success">
                              Pro
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Dashboard 2</Link>
                        </li>
                        <li>
                          <Link to="#">Dashboard 3</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-book"></i>
                      <span>Quotations</span>
                    </Link>
                  </li>
                  <li className="sidebar-dropdown">
                    <Link to="#">
                      <i className="fa fa-shopping-cart"></i>
                      <span>Purchase Orders</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="#">Products</Link>
                        </li>
                        <li>
                          <Link to="#">Orders</Link>
                        </li>
                        <li>
                          <Link to="#">Credit cart</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-book"></i>
                      <span>GRN</span>
                    </Link>
                  </li>
                  <li className="sidebar-dropdown">
                    <Link to="#">
                      <i className="far fa-gem"></i>
                      <span>Sales</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="#">General</Link>
                        </li>
                        <li>
                          <Link to="#">Panels</Link>
                        </li>
                        <li>
                          <Link to="#">Tables</Link>
                        </li>
                        <li>
                          <Link to="#">Icons</Link>
                        </li>
                        <li>
                          <Link to="#">Forms</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-book"></i>
                      <span>Expenses</span>
                    </Link>
                  </li>
                  <li className="sidebar-dropdown">
                    <Link to="#">
                      <i className="fa fa-chart-line"></i>
                      <span>Reports</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="#">Pie chart</Link>
                        </li>
                        <li>
                          <Link to="#">Line chart</Link>
                        </li>
                        <li>
                          <Link to="#">Bar chart</Link>
                        </li>
                        <li>
                          <Link to="#">Histogram</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a onClick={this.onLogoutHandler.bind(this)} href="#!">
                      <i className="fas fa-sign-out-alt" />{" "}
                      <span className="hide-sm">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-footer">
              <Link to="#">
                <i className="fa fa-bell"></i>
                <span className="badge badge-pill badge-warning notification">
                  3
                </span>
              </Link>
              <Link to="#">
                <i className="fa fa-envelope"></i>
                <span className="badge badge-pill badge-success notification">
                  7
                </span>
              </Link>
              <Link to="#">
                <i className="fa fa-cog"></i>
                <span className="badge-sonar"></span>
              </Link>
              <a
                onClick={this.onLogoutHandler.bind(this)}
                href=""
                className="tooltip-test"
                data-toggle="tooltip"
                data-placement="top"
                title="Logout"
              >
                <i className="fa fa-power-off" />
              </a>
            </div>
          </nav>

          {/* Body Content */}
          <main className="page-content">
            <div className="">{this.props.children}</div>
          </main>
        </div>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-secondary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h2>Billing One</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active lead">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item lead">
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item lead">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Body Content */}
        <main className="page-content">
          <div className="">{this.props.children}</div>
        </main>
      </Fragment>
    );

    return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
  }
}

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Sidebar);
