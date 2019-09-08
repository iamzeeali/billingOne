import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { filterStaff, clearFilter } from "../../_actions/staff";

const FilterStaffs = ({ filterStaff, clearFilter, filtered }) => {
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChangeHandler = e => {
    if (text.current.value !== "") {
      filterStaff(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className="input-group">
      <input
        ref={text}
        type="text"
        className="form-control search-menu"
        placeholder="Search Staff..."
        onChange={onChangeHandler}
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <i className="fa fa-search text-dark" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  staffs: state.staff.staffs,
  filtered: state.staff.filtered
});

export default connect(
  mapStateToProps,
  { filterStaff, clearFilter }
)(FilterStaffs);
