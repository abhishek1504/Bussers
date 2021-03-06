import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types'; // ES6
import auth from '@react-native-firebase/auth';
import ButtonComponent from '../../atoms/Button';
import InputComponent from '../../atoms/Input';
import appStyles from '../../appStyles';
import NavigationService from '../../navigation/NavigationService';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
    };
  }

  componentDidUpdate() {
    const {userData} = this.props;
    if (userData && userData != null) {
      NavigationService.navigate('Search');
    }
  }

  emailChanged = (text) => {
    this.setState({userEmail: text});
  };

  passwordChanged = (text) => {
    this.setState({password: text});
  };

  inputEmailProps = () => ({
    placeHolder: 'Enter user email',
    textChange: this.emailChanged,
  });

  inputPasswordProps = () => ({
    placeHolder: 'Enter password',
    secureTextEntery: true,
    textChange: this.passwordChanged,
  });

  performLogin = () => {
    const {userEmail, password} = this.state;
    const {loginSuccess} = this.props;
    auth()
      .signInWithEmailAndPassword(userEmail, password)
      .then((userData) => {
        console.log(userData);
        loginSuccess(userData);
      })
      .catch((error) => {
        alert('Error while logging in');
      });
  };

  buttonLoginProps = () => ({
    buttonTitle: 'Login',
    onPress: this.performLogin,
  });

  checkLogin = () => {
    const emailProps = this.inputEmailProps();
    const pwdProps = this.inputPasswordProps();
    const loginBtnProps = this.buttonLoginProps();
    return (
      <View>
        <InputComponent {...emailProps} />
        <InputComponent {...pwdProps} />
        <ButtonComponent {...loginBtnProps} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={appStyles.parentView}>
          <View>{this.checkLogin()}</View>
        </View>
      </SafeAreaView>
    );
  }
}

LoginComponent.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

LoginComponent.defaultProps = {};

export default LoginComponent;
