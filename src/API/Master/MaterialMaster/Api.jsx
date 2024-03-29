import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//----------------Create Material Group-------------------//

export const CreateMaterialGroup = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/MaterialGroup`, {
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

//------------------Create Material SubGroups --------------------//

export const CreateMaterialSubGroup = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/MaterialSubGroup`, {
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

//---------------------Create Material ---------------------------//
export const CreateMaterial = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Material`, {
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


//---------------------Create UOM-------------------------------//
export const CreateUomApis = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Uom`, {
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


//---------------------Create UOM Coversion------------------//

export const CreateUomConverionApi = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Uom`, {
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
