import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonComponent = (props) => (
  <View style={styles.buttonParentStyle}>
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  </View>
);

export default ButtonComponent;
