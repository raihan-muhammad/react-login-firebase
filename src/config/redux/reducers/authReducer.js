const initialState = {
  dataLogin: null,
  dataRegister: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_LOGIN":
      return {
        ...state,
        dataLogin: action.payload,
      };
    case "SET_DATA_REGISTER":
      return {
        ...state,
        dataRegister: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
