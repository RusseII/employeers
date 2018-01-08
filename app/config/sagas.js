import { takeEvery, call, put, select } from "redux-saga/effects";

import {
  LOAD_COMPANY,
  GET_COMPANY_DATA,
  SAVE_COMPANY_DATA
} from "../actions/companies";

export const getLatestRate = currency =>
  fetch(`http://api.fixer.io/latest?base=${currency}`);

export const getLastestData = () =>
  fetch("http://api.deephire.io/v1.0/companies");

const fetchCompanyData = function*(action) {
  // let result = {
  //   data: [
  //     { pin: "12346", website: "this is a json now" },
  //     { pin: "12347", website: "still is!" }
  //   ]
  // };

  const response = yield call(getLastestData);
  const result = yield response.json();

  yield put({ type: SAVE_COMPANY_DATA, result });
};

const fetchLatestConversionRates = function*(action) {
  let text = action.text;
  console.log(text, "TESTING HEHE");
  //console.log(state, "state");
  let dog = yield select(state => state.companies.myCompanies.text);
  console.log(dog, "state");
  const response = yield call(getLatestRate, dog);

  const result = yield response.json();
  console.log(result);
  //   if (text === undefined) {
  //     //     text = yield select(state => state.currencies.currencies.text);
  //   }

  //     const response = yield call(getLatestRate, currency);
  //     const result = yield response.json();
  //     if (result.error) {
  //       yield put({ type: CONVERSION_ERROR, error: result.error });
  //     } else {
  //       yield put({ type: CONVERSION_RESULT, result });
  //     }
  //   } catch (error) {
  //     yield put({ type: CONVERSION_ERROR, error: error.message });
};

const rootSaga = function*() {
  yield takeEvery(LOAD_COMPANY, fetchLatestConversionRates);
  yield takeEvery(GET_COMPANY_DATA, fetchCompanyData);
  //   yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
