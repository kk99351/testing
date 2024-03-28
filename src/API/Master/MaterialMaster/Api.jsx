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
