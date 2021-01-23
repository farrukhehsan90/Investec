import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import styles from './styles';
import {loginUser} from '../../store/actions/auth';

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const handleSubmit = (_) => {
    if (!userName) {
      return Alert.alert('Error', 'Please enter your name');
    }

    dispatch(loginUser({name: userName}));
    navigation.dispatch(StackActions.replace('Home', {showMessage: true}));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Text style={styles.paragraph}>Welcome to Investec</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        placeholderTextColor="gray"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Welcome;
