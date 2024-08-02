const initialState = 'dsd';

const changeName = (state = initialState,action,) =>{

    // if(action.type=="NAME"){
    // console.log("hello")
    // }
    // else{
    //     return state;
    // }

    switch(action.type){
        case "NAME":
           return state = "nirav pado";

            default:
                return state
    }
}

export default changeName