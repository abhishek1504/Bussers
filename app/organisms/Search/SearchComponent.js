import React, {Component} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import appStyles from '../../appStyles';
import database from '@react-native-firebase/database';

class SearchComponent extends Component {
  componentDidMount() {
    const {setItems} = this.props;
    const categories = database()
      .ref('categories')
      .on('value', (snapshot) => {
        setItems(snapshot.val());
      });
  }

  drawCategory = ({item}) => {
    console.log('Draw Item', item);
    return (
      <View>
        <Text>{item.catName}</Text>
      </View>
    );
  };

  drawCategories = () => {
    const {categories} = this.props;
    if (categories !== null) {
      console.log('categories', categories);
      return (
        <View>
          {/* <Text>{JSON.stringify(categories)}</Text> */}
          <FlatList
            data={categories}
            renderItem={(item) => this.drawCategory(item)}
          />
        </View>
      );
    }
    return (
      <View>
        <Text>No categories found</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={appStyles.parentView}>{this.drawCategories()}</View>
      </SafeAreaView>
    );
  }
}

export default SearchComponent;
