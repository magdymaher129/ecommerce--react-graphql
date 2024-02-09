import { useContext } from "react";
import storeContext from "../../../data/store";
import SingleColor from "./SingleColor";
import { useColor } from "../hooks/useColor";

function AllColors() {

  const{loading,color,error}= useColor()
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
  
    <form>
      {color.map((item) => <SingleColor  title={item.attributes.title}   id ={item.id} key={item.id} />
       
     )}
    </form>
  );
}

export default AllColors;
