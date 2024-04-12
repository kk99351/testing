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

//------------------Approve Assessts--------------------------//

export const ApproveAssests = async (id, status, remark) => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/asset/updateStatusAndSaveAWareHouse?idInv=${id}&statusApprove=${status}&rmkAsst=${remark}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

//--------------------------Get All Rejected Assests----------------------------------//
export const GetRejectedAssests = async () => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/rejectinvoices`, {
      method: "GET",
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//-----------------------------Generate serial number------------------------------//
export const GenerateSerialNumber = async quantity => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/asset/generateSerialNumbers?quantity=${quantity}`,
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

//------------------------Get Approved Assests-------------------------------//
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
