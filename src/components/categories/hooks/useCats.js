import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useCats() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  // init api link
  const url = "http://localhost:1337/api/categories";
  // init config file
  const config = {
    headers: { Authorization: "Bearer" + import.meta.env.VITE_APP_AUTH },
  };
  useEffect(() => {
    try {
      setLoading(true);
      // create function to get categories title
      const res = async () => {
        await axios
          .get(url, config)
          .then((result) => setCategory(result.data.data));
        // setData(result.data.data)
      };
      res()
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  return { category, loading, error };
}


export default useCats