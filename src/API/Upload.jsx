import { ApiBaseUrl } from "./ApiBaseUrl";

export const UploadFile = async file => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const result = await fetch(`${ApiBaseUrl}/files/upload`, {
      method: "POST",
      body: formData,
    });
    return result;
  } catch (error) {
    return error.response.message;
  }
};
