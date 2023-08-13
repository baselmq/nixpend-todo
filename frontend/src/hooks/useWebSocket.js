import { useState, useEffect } from "react";

// A custom hook that uses WebSocket to stream data from an API
export const useWebSocket = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create a new WebSocket instance
    const ws = new WebSocket(url);

    // Set loading to true when the connection is opened
    ws.onopen = () => {
      setLoading(true);
    };

    // Set data when a message is received
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    // Set error when an error occurs
    ws.onerror = (event) => {
      setError(event.error);
    };

    // Set loading to false when the connection is closed
    ws.onclose = () => {
      setLoading(false);
    };

    // Clean up the WebSocket instance when the component unmounts
    return () => {
      ws.close();
    };
  }, [url]); // Only run the effect when the url changes

  // Return the data, loading status, and error
  return { data, loading, error };
};
