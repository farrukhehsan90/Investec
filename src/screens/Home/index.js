import React, { useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, NativeModules } from "react-native";
import { StackActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SwipeButton } from "../../components";
import styles from "./styles";
import { loginUser } from "../../store/actions/auth";

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = _ => {
    dispatch(loginUser(null));
    navigation.dispatch(StackActions.replace('Welcome'));
  }

  useEffect(() => {
    if (route?.params?.showMessage) {
      const { Device } = NativeModules;
      Device.isEmulator((err, isEmulator) => {
        Alert.alert('Notice', `You are currently ${isEmulator ? '' : 'not'} using a simulator / emulator.`);
      });
    }

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome, {user?.name}</Text>
        <TouchableOpacity style={styles.signOutButton} onPress={handleLogout}>
          <Icon name="sign-out" size={20} color="#ffffff" style={styles.signOutIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraph}>4 variations of a button</Text>
      <Button title="Press me" color="transparent" textColor="#6095cc" />
      <Button onPress={_ => navigation.navigate('Dashboard')} title="Press me" color="#34424a" textColor="#6095cc" />
      <Button onPress={_ => navigation.navigate('Setting')} title="Press me" color="#6eb1f7" textColor="#fff" />
      <SwipeButton onSwipeSuccess={_ => Alert.alert('Success', 'Swipe Success')} />
    </View>
  );
};

export default Home;