/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
// import firebase from '@react-native-firebase/app';
import MainStackNavigator from './app/navigation/MainStackNavigator';
import {store, sagaMiddleware} from './app/redux';
import sagas from './app/sagas';
import NavigationService from './app/navigation/NavigationService';

sagaMiddleware.run(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
