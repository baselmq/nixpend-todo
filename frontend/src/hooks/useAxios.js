import { useState, useEffect } from "react";
import axios from "axios";

// A custom hook that uses axios to fetch data from an API
export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Set loading to true before making the request
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Only run the effect when the url changes

  // Return the data, loading status, and error
  return { data, loading, error };
};
