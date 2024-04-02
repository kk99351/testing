import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//----------------Create DELEGATION Master------------------ ---//

//----------------Create Tax ----------------------------------//

//----------------Create Finanicial Year-----------------------//

//----------------Ceate Current Master------------------------//
export const CreateCurrency = async payload => {
    try {
      const result = await fetch(`${ApiBaseUrl}/master/Currency`, {
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
  

//----------------Terms and Conditions------------------------//
