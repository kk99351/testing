import { ApiBaseUrl } from "src/API/ApiBaseUrl";

//----------------Get Attribute Dropdown ---------------------------//
export const AttributesDropDown = async () => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/asset/GetAssetTagAttributesDropDown`,
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

//-------------------Create Tag Attributes -------------------------//
export const CreateTagAttributes = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/asset/TagAttributesSelection`, {
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

//---------------------Get GetAssetTagAttributesList-----------------------//

export const GetAssetTagAttributesList = async () => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/GetAssetTagAttributesList`, {
      method: "GET",
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//---------------------Delete Tags -----------------------//
export const DeleteTags = async id => {
  try {
    let result = await fetch(`${ApiBaseUrl}/asset/TagAttributes/${id}`, {
      method: "DELETE",
    });

    return result;
  } catch (error) {
    return error.message;
  }
};

//--------------------GetAssetListforTagging -----------------------//
export const GetAssetListforTagging = async (material, id) => {
  try {
    let result = await fetch(
      `${ApiBaseUrl}/GetAssetListforTagging?SearchOption=${material}&SearchId=${id}`,
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
