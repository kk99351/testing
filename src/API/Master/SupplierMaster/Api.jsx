//----------------CReate Supplier ----------------------//

export const CreateSuppliers = async payload => {
  try {
    const result = await fetch(`${ApiBaseUrl}/master/Vendor`, {
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
