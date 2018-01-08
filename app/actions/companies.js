export const LOAD_COMPANY = "LOAD_COMPANY";
export const GET_COMPANY_DATA = "GET_COMPANY_DATA";
export const SAVE_COMPANY_DATA = "SAVE_COMPANY_DATA";
export const SAVE_COMPANY_INDEX = "SAVE_COMPANY_INDEX";

export function saveCompanyIndex(index) {
  return { type: SAVE_COMPANY_INDEX, index };
}
export function loadCompany(text) {
  return { type: LOAD_COMPANY, text };
}

export function getCompanyData() {
  return { type: GET_COMPANY_DATA };
}
