import { LOAD_COMPANY } from "../actions/companies";
import { combineReducers } from "redux";

const initialState = {
  text: "test",
  error: null
};

function companies(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPANY:
      //   return Object.assign({}, state, { text: action.text });
      return {
        text: action.text
      };
    default:
      return state;
  }
}

const todoApp = combineReducers({
  companies
});

export default todoApp;
