import { useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:8000/api/v1/todo";

const useAddTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTask = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BASE_URL}`, data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  return { createTask, loading, error };
};

export default useAddTask;
