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

//----------------------GET SINGLE ASSESTS --------------------------//
export const GetSingleApprovedAssests = async id => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/asset/GetAssetByStatus?devicestatus=instore&Id=${id}`,
      {
        method: "GET",
      }
    );
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//---------------------Update ASSESTS-------------------------------//
export const UpdateAssests = async payload => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/AssetUpdate`, {
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
