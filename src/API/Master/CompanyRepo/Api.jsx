import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//-------------Create Company Master-------------------------//

export const CreateCompanyMaster = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/CompanyMaster`, {
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

//----------------------Mail configration--------------------//
export const CreateMailConfigration = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/MailConfig`, {
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

//---------------------Helpdesk Mail Configration------------//
