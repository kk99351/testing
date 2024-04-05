import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//----------------Create DELEGATION Master------------------ ---//

//----------------Create Tax ----------------------------------//
export const CreateTax = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Tax`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return result;
  } catch (error) {
    return error.message;
  }
};

//----------------Create Finanicial Year-----------------------//
export const CreateFinanicialYear = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Financialyear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return result;
  } catch (error) {
    return error.message;
  }
};

//----------------Ceate Current Master------------------------//
export const CreateCurrency = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Currency`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return result;
  } catch (error) {
    return error.message;
  }
};

//----------------Terms and Conditions------------------------//
