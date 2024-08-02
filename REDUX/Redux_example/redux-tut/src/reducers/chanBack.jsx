const initialState = "black";


const changeBackground =  (state = initialState,action) =>{

    switch(action.type){
        case "CCB":
            return state = "blue";

            case "CCR":
                return state = "red";
            case "CCP":
            return state = "pink";
           default :
           return state;
    }
}

export default changeBackground