const initialState = 0;

const changeNumber = (state = initialState, action) => {
  // if(action.type=="INCREMENT"){
  //     return state + 1;
  // }
  // else if(action.type=="DECREMENT"){
  //     return state - 1;
  // }
  // else{
  //     return state
  // }

  switch (action.type) {
    case "INCREMENT":
      return state += 1;
    case "DECREMENT":
      return state -= 1;
    default:
      return state;
  }
};

export default changeNumber;
