import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Button = ({onPress, title, color, textColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.buttonContainer, backgroundColor: color}}>
      <Text style={{...styles.buttonText, color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  title:PropTypes.string,
  color:PropTypes.string,
  textColor:PropTypes.string
};

export default Button;
