import * as types from "../_actions/types";

const initialState = {
  staff: null,
  staffs: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_STAFFS:
      return {
        ...state,
        staffs: payload,
        loading: false
      };
    case types.ADD_STAFF:
      return {
        ...state,
        staff: payload,
        loading: false
      };
    case types.CLEAR_STAFF:
      return {
        ...state,
        staff: null,
        staffs: [],
        loading: false
      };

    case types.FILTER_STAFF:
      return {
        ...state,
        filtered: state.staffs.filter(staff => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            staff.firstName.match(regex) ||
            staff.lastName.match(regex) ||
            staff.email.match(regex) ||
            staff.mobile.match(regex) ||
            staff.username.match(regex)
          );
        })
      };
    case types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case types.STAFF_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
