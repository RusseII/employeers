export const LOAD_COMPANY = "LOAD_COMPANY";

export function loadCompany(text) {
  return { type: LOAD_COMPANY, text };
}
