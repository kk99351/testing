import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//-----------------------Create Depearmnent-------------------------//
export const CreateDepertment = async payload => {
  console.log("payloaf", payload);
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
//---------------------Create EMPLOYE-------------------------//
export const CreateEmploye = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Empuser`, {
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
//--------------------CReate USER TYPE------------------------//
export const CreateUserType = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Usertype`, {
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

//-----------------Create Permissions---------------------------//
export const CreateUserPermission = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/UserPermission`, {
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

//-----------------Create User Login---------------------------//
export const CreateUserLogin = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/UserLogin`, {
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
