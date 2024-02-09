import { useSort } from "../hooks/useSort";

function PriceSort() {
  const handleSort = useSort();
  return (
    <form
      style={{
        fontSize: "18px",

        marginTop: "30px",
        marginbottom: "30px",
        position: "relative",
        left: "2px",
      }}
    >
      <select
        name='sorting types'
        id='sort'
        style={{ width: "auto", height: "40px", borderRadius: "10px" }}
        onChange={(e) => handleSort(e)}
      >
        <option value='asc' style={{ fontSize: "18px", width: "auto" }}>
          sorted by..
        </option>
        <option value='asc' style={{ fontSize: "18px", width: "auto" }}>
          price asc
        </option>
        <option value='desc' style={{ fontSize: "18px", width: "auto" }}>
          price desc
        </option>
      </select>
    </form>
  );
}

export default PriceSort;
