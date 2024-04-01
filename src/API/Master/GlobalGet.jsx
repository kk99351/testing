import { ApiBaseUrl } from "../ApiBaseUrl";

//--------------------Get All Data-----------------------//
export const GetAllData = async dept => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/master/MasterGetAll?mastername=${dept}&requireString=selectAll`,
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

//------------------Get Single data by Id-----------------//
export const GetSignleData = async (dept, id) => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/master/MasterGetAll?id=${id}&mastername=${dept}&requireString=selectAll`,
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
