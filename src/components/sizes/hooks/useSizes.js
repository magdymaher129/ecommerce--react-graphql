import axios from "axios";
import { useEffect, useState } from "react";

function useSizes() {
  const url = "http://localhost:1337/api/sizes";
  const config = {
    headers: { Authorization: "Bearer" + import.meta.env.VITE_APP_AUTH },
  };

  const [size, setSize] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, config);
      setSize(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { size, loading, error };
}

export default useSizes;

  