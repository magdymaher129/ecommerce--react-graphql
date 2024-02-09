import SingleSize from "./SingleSize";
import { useSize } from "../hooks/useSize";

function AllSizes() {
  const { loading, size, error } = useSize();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <form>
      {size.map((item) => (
        <SingleSize id={item.id} title={item.attributes.title} key={item.id} />
      ))}
    </form>
  );
}

export default AllSizes;
