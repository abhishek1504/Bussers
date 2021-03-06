import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginComponent from '../organisms/Login';
import SearchComponent from '../organisms/Search';

const StackNavigator = createStackNavigator();

class MainStackNavigator extends Component {
  render() {
    return (
      <StackNavigator.Navigator name="root">
        <StackNavigator.Screen name="Login" component={LoginComponent} />
        <StackNavigator.Screen name="Search" component={SearchComponent} />
      </StackNavigator.Navigator>
    );
  }
}

export default MainStackNavigator;
