import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//------------------------Create Entity-------------------------//
export const CreateEntity = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Entity`, {
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

//-----------------------Create Location -------------------------//
export const CreateLocation = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/locations`, {
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

//-------------------------Create Building -------------------------//
export const CreateBuilding = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Building`, {
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

//-------------------------Create Floor---------------------------//
export const CreateFloor = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Floor`, {
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
