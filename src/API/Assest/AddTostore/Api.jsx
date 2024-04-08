import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//------------------Add New Assests -----------------------//
export const CreateAssests = async payload => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/AddAsset`, {
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

//------------------ Get All Assests -----------------------//
export const GetAssests = async () => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/allinvoices`, {
      method: "GET",
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------GetSingle Assests -----------------------//

export const GetSingleAssests = async id => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/Invoice/${id}`, {
      method: "GET",
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
