import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//-----------------------Create Depearmnent-------------------------//
export const CreateDepertment = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Dept`, {
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

//----------------------Create DESIGNATION-------------------------//
export const CreateDesignation = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Design`, {
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
