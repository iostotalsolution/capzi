
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../../store/authSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
