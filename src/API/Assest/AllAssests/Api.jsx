import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//----------------------GET ALL ASSESTS----------------------------//
export const GetApprovedAssests = async quantity => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/allassets`, {
      method: "GET",
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
