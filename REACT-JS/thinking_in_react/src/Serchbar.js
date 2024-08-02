function Serchbar({filterData1, setFilterData1, stockOnly1, setStockOnly1}){
    return(
        <>
        
        <form>
            <input type="text" value={filterData1}  onChange={(e)=> setFilterData1(e.target.value)} placeholder="Serch..." style={{padding:"8px",fontSize:"15px"}}/>
            <br></br>
            <br></br>
            <label>
                <input type="Checkbox" checked={stockOnly1} onChange={(e)=> setStockOnly1(e.target.checked)}/>
                
                Only Show Product in stock
            </label>
        </form>

        </>

       
    )
}
export {Serchbar}