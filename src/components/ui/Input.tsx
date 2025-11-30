
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#A9A9A9"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});
