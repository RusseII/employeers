import {
  LOAD_COMPANY,
  GET_COMPANY_DATA,
  SAVE_COMPANY_DATA,
  SAVE_COMPANY_INDEX
} from "../actions/companies";
import { combineReducers } from "redux";

const initialState = {
  text: "test",
  error: null,
  companyIndex: 1,
  data: {
    data: [
      { pin: "12340", website: "default" },
      { pin: "12349", website: "default 2" }
    ]
  }
};

function myCompanies(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPANY:
      //   return Object.assign({}, state, { text: action.text });
      return {
        ...state,
        text: action.text
      };
    case GET_COMPANY_DATA:
      return {
        ...state
      };
    case SAVE_COMPANY_DATA:
      console.log("SAVE_COMPAN_DATA reducer was ran");
      console.log(action);
      return {
        ...state,

        data: action.result
      };
    case SAVE_COMPANY_INDEX:
      return {
        ...state,
        companyIndex: action.index
      };
    default:
      return state;
  }
}

const todoApp = combineReducers({
  myCompanies
});

export default todoApp;
