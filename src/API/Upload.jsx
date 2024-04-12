import { UploadUrl } from "./ApiBaseUrl";

export const UploadFile = async file => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    let result = await fetch(`${UploadUrl}files/upload`, {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.response.message;
  }
};

export const GetImage = async file => {
  try {
    let result = await fetch(`${UploadUrl}files/upload/${file}`, {
      method: "GET",
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.response.message;
  }
};
