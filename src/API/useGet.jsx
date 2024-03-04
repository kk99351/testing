import { useEffect, useState, useCallback } from "react";

export const useGet = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async (path) => {
    setIsLoading(true);

    try {
      const response = await fetch(path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text(); // Read the error text
        console.error(`Error response [${response.status}]:`, errorText);
        setIsError(true);
      } else {
        const jsonData = await response.json();
        setData(jsonData);
        setIsError(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [setData, setIsError]);

  return { getData, data, isLoading, isError };
};
