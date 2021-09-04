// { type: 'LOGGED_IN_USER', payload: {name: "Bob", role: "Seller"} }
export const authReducer = (state = {}, action) => {
  // The way Reducer updates the state, it will take the state and dispatch some action(will have name and payload(data))
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
