import axios from "axios";
import { useContext, useEffect, useState } from "react";
import qs from "qs";
import storeContext from "../../../data/store";




function useProducts() {
  const { catfilters } = useContext(storeContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const query = qs.stringify({
          filters: {
            categories: {
              id: {
                $in: catfilters
              },
            },
          },
        });

        const url = `http://localhost:1337/api/products?populate=*&${query}`;

        const config = {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_APP_AUTH}` },
        };
      
        const response = await axios.get(url);
        setProducts(response.data.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [catfilters]);

  return [products, loading, error];
}


export default useProducts;
 