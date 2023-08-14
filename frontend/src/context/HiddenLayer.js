// HiddenLayer.js

import axios from "axios";
import { useContext, useEffect } from "react";
import { statusCxt } from "./statusCxt";
import { reloadCxt } from "./reloadCxt";
import { DataCxt } from "./dataCxt";
const url = "http://localhost:8000/api/v1/todo";

const HiddenLayer = () => {
  const { setData, setLoading, setError } = useContext(DataCxt);
  const { reload } = useContext(reloadCxt);
  const { setStatus } = useContext(statusCxt);
  useEffect(() => {
    console.log("object");
    const fetchData = async () => {
      // Set loading to true before making the request
      setLoading(true);
      try {
        const response = await axios.get(url);

        setData(response.data.data);
        const columns = response.data.data.map((item) => ({
          title: item.nameColumn,
        }));

        setStatus(columns);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reload]);
};

export default HiddenLayer;
