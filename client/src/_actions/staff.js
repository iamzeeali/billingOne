import axios from "axios";
import { setAlert } from "./alert";
import * as types from "./types";

//Get all Staffs
export const getStaffs = () => async dispatch => {
  try {
    const res = await axios.get("/api/staff");
    console.log(res.data);
    dispatch({
      type: types.GET_STAFFS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.STAFF_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Staff
export const addStaff = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/staff", formData);
    console.log(res.data);
    dispatch({
      type: types.ADD_STAFF,
      payload: res.data
    });

    dispatch(setAlert("Staff Added", "success"));

    history.push("/staff");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.STAFF_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Filter Staff
export const filterStaff = text => async dispatch => {
  dispatch({ type: types.FILTER_STAFF, payload: text });
};

// Clear Staff
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
