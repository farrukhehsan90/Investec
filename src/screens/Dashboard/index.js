import React from 'react';
import { View, Text } from "react-native";
import { useSelector } from 'react-redux';
import styles from "./styles";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to the Dashboard{" "}
        <Text style={styles.name}>
          {user?.name}
        </Text>.
        You can manage your data here
        </Text>
    </View>
  );
};

export default Dashboard;