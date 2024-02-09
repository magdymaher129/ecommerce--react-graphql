import { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import Select from "react-dropdown-select";

function Samples({ index, name, handleUpdateProperty, products, item }) {
  //-------------- get index parameter------//

  //console.log("index",index)
  //-------------- get index parameter------//
  //------------ get all item parameter------//

  // const item= useSelector(state=>state[`${name}`].data)
  let plurs = "";
  if (name !== "category") {
    plurs = `${name}s`;
  } else {
    plurs = `categories`;
  }
  //console.log("products",products)
  // console.log("item",item)
  //console.log("plurs",plurs)
  //const item=allSize
  //----------- get all item parameter------//

  //--------- get all Product parameter------//
  // const product= useSelector(state=>state.product)
  //--------- get all Product parameter------//

  const [selected, setselected] = useState();
  const [selectedID, setselectedID] = useState();
  const [valueID, setValueID] = useState();
  useEffect(() => {
    if (products) {
      // console.log(product.data[1])

      const datax = products.data;
      //  console.log("xx",datax[0].id)
      for (let i = 0; i < products.data.length; i++) {
        if (parseInt(datax[i].id) === parseInt(index)) {
          //  console.log("index" ,index)
          //console.log("datax",i )

          //  const data =datax[i]
          //  console.log("item" ,item)  //  console.log("product" ,product)    //  console.log("datax",datax)
          if (datax[i]) {
            // console.log("datax",datax[i])
            // console.log(data.attributes.sizes.data)
            //   const selectSize = datax[i].attributes[`${plurs}`].data;
            const selectSize = datax[i].attributes[`${plurs}`].data;
            const selectSizeID = selectSize.map((c) => c.id);
            const selectSizeTitle = selectSize.map((c) => c.attributes.title);
            //  console.log(selectSizeID)
            //  console.log(selectSizeTitle)
            const itemObject = selectSizeID.map((id, index) => ({
              value: id,
              label: selectSizeTitle[index],
            }));
            if (itemObject) {
              setselected(itemObject);
              //  console.log(selected)
            }
          }
        }
      }
    }
  }, [products]);

  useEffect(() => {
    if (selected) {
      // console.log("selected", selected);
      setselectedID(selected.map((item) => item.value));
    }
  }, [selected]);
  //  useEffect(()=>{
  // if(selectedID){
  //   console.log("selectedID",selectedID)
  // }
  //  },[selectedID])
  const [allItem, setAllItem] = useState([]);
  // const [values, setValues] = useState([]);
  useEffect(() => {
    if (item) {
      const itemId = item.map((p) => p.id);
      console.log("itemId", itemId);
      const itemTitle = item.map((p) => p.attributes.title);
      console.log("itemTitle", itemTitle);
      const itemObject = itemId.map((id, index) => ({
        value: id,
        label: itemTitle[index],
      }));
      setAllItem(itemObject);
      //console.log("itemObject",itemObject)
      // console.log(sizeObject.map(item=>item.value))
    }
  }, [item]);

  useEffect(() => {
    if (valueID) {
      console.log("valueID",valueID)// demanded value

      handleUpdateProperty(name, valueID);
    }
  }, [valueID]);

  return (
    //--------- Jsx------//
    <div>
      <label htmlFor='item' className={styles.label}>{name}</label>

      <Select
        options={allItem}
        multi
        values={selected || []}
        className="bg-white"
        onChange={(values) => {
          //setValues(values)
          setValueID(values.map((item) => item.value));
        }}
      />
    </div>
    //--------- Jsx------//
  );
}

export default Samples;
