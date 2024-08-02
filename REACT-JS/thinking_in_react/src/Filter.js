 import {Serchbar} from "./Serchbar";
 import Product from "./Product"
 import { useState} from "react";
 
 const Filterableetable = ({products}) => {

    const [FilterData ,setFilterData] = useState("")
    const [stockOnly ,setStockOnly] = useState(false)
    
    return(
      <>
       <h1>This is filter table </h1>
       <Serchbar filterData1={FilterData} setFilterData1={setFilterData} stockOnly1={stockOnly} setStockOnly1={setStockOnly }/>
       <Product products = {products} filterData1={FilterData} stockOnly1={stockOnly}/>
      </>
    )
  }

  export default Filterableetable;