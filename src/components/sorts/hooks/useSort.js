import { useContext, useState } from "react";
import storeContext from "../../../data/store";

export function useSort() {
  const [selection, setSelection] = useState();
  const { setSort } = useContext(storeContext);
  const handleSort = (e) => {
    e.preventDefault();
    setSelection(e.target.value);
    if (selection === "asc") {
      console.log(selection);
      setSort(["price:desc"]);
    }
    if (selection === "desc") {
      setSort(["price:asc"]);
      console.log(selection);
    }
  };
  return handleSort;
}
