import Productcategory from "./Productcat";
import Productrow from "./Productrow";

function Product({ products, filterData1, stockOnly1 }) {
  const row = [];
  let lastcategory = null;

  products.forEach((e) => {
    if(e.name.toLowerCase().indexOf(filterData1.toLowerCase()) === -1){
        return;
    }
    if(stockOnly1 && !e.stocked){
        return;
    }

    if (e.category !== lastcategory) {
      row.push(<Productcategory category={e.category} key={e.category} />);
    //   console.log(e.category);
      lastcategory = e.category;
    }
    row.push(
    //   <Productrow e={e} rowdata={e.name} key={e.name} rowprice={e.price} />
      <Productrow key={e.name} xyz={e} />
    );
  });

  // console.log(lastcategory)
  console.log(row);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </>
  );
}

export default Product;
