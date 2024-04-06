//------------------Add New Assests -----------------------//
export const CreateAssests = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/asset/AddAsset`, {
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

//----------------
