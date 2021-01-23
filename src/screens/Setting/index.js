import React from 'react';
import { View, Text } from "react-native";
import { useSelector } from 'react-redux';
import styles from "./styles";

const Setting = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to Settings{" "}
        <Text style={styles.name}>
          {user?.name}
        </Text>.
        You can manage your account settings here
        </Text>
    </View>
  );
};

export default Setting;