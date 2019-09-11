import axios from "axios";
import { setAlert } from "./alert";
import * as types from "./types";

// Get current staff
export const getCurrentStaff = id => async dispatch => {
  try {
    const res = await axios.get(`/api/staff/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_STAFF,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.STAFF_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Staffs
export const getStaffs = () => async dispatch => {
  try {
    const res = await axios.get("/api/staff");
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
    dispatch({
      type: types.ADD_STAFF,
      payload: res.data
    });

    dispatch(setAlert("Staff Added", "success"));

    history.push("/staffs");
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

// Edit staff
export const editStaff = (formData, history, id) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.put(`/api/staff/${id}`, formData, config);
    console.log(res.data);

    dispatch({
      type: types.GET_STAFF,
      payload: res.data
    });

    dispatch(setAlert("Staff Updated", "success"));

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

//Delete Staff
export const deleteStaff = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/staff/${id}`);
      dispatch({
        type: types.DELETE_STAFF,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: types.STAFF_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current Staff
export const setCurrentStaff = staff => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_STAFF,
    payload: staff
  });
};

// Clear Staff
export const clearStaff = () => async dispatch => {
  dispatch({ type: types.CLEAR_STAFF });
};

//Filter Staff
export const filterStaff = text => async dispatch => {
  dispatch({ type: types.FILTER_STAFF, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
