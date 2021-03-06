import React from 'react';
import PropTypes from 'prop-types'; // ES6

import {View, TextInput} from 'react-native';
import styles from './styles';

const InputComponent = (props) => {
  const {placeHolder, secureTextEntry, textChange} = props;
  return (
    <View style={styles.parentView}>
      <TextInput
        style={styles.textInputStyles}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        onChangeText={textChange}
        autoCapitalize="none"
      />
    </View>
  );
};

InputComponent.propTypes = {
  placeHolder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  textChange: PropTypes.func,
};

InputComponent.defaultProps = {
  placeHolder: '',
  secureTextEntry: false,
  textChange: () => {},
};

export default InputComponent;
