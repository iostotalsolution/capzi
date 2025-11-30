
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Pagination = ({ data, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const opacity = currentIndex === index ? 1 : 0.3;
        return <Animated.View key={index.toString()} style={[styles.dot, { opacity }]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
});

export default Pagination;
