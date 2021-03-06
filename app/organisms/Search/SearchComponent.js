import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import appStyles from '../../appStyles';
import database from '@react-native-firebase/database';

class SearchComponent extends Component {
  componentDidMount() {
    const products = database().ref('products').orderByValue().once('value');
    products
      .then((data) => console.log(data))
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <SafeAreaView>
        <View style={appStyles.parentView}>
          <Text>Search</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SearchComponent;
