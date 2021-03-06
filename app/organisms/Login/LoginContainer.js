import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';
import {loginSuccessAction} from '../../redux/actions/loginAction';

function mapStateToProps(state) {
  return {
    ...state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: (userData) => {
      dispatch(loginSuccessAction(userData));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
