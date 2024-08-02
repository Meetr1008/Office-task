function Productrow({ rowdata, rowprice, e, xyz }) {
//   const name = e;
//   if (name.stocked == false) {
//     rowdata = <span style={{ color: "red" }}>{rowdata}</span>;
//   }
    let name  = xyz.stocked;
    if(name){
        name = xyz.name;
    }
    else{
        name =  <span style={{ color: "red" }}>{xyz.name}</span>;
    }
  return (
    <>
      <tr>
        <td>{name}</td>
        {/* <td>{xyz.name}</td> */}
        <td>{xyz.price}</td>
      </tr>
    </>
  );
}

export default Productrow;
