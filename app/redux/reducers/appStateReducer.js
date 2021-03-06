import { APP_LAUNCH } from '../actions/appStateActions';

const initialState = {
  isLoggedIn: false,
  error: false,
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LAUNCH:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default appStateReducer;
