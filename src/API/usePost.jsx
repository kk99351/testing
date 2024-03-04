import { useEffect, useState, useCallback } from "react";

export const usePut = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const putData = useCallback(async (path, requestBody) => {
    setIsLoading(true);

    try {
      const response = await fetch(path, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const json = await response.json();
        console.error(json.error);
        setIsError(json.error);
      } else {
        const json = await response.json();
        setData(json);
        setIsLoading(false);
        setIsError(false);
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setIsError("An error occurred while updating data.");
    }
  }, [setData, setIsError]);

  return { putData, data, isLoading, isError };
};
