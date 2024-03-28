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

//---------------------Create EMPLOYE-------------------------//

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
