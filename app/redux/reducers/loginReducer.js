import { LOGIN_TRUE } from '../actions/constants';

const initialState = {
  email: '',
  password: '',
  loggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TRUE:
      return {
        ...state,
        loggedIn: true,
        userData: action.response,
      };
    default:
      return { ...state };
  }
};

export default loginReducer;
