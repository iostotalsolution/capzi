
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../store/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // In a real app, you would perform some authentication here
    // and get a token.
    dispatch(setToken('some-dummy-token'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;
