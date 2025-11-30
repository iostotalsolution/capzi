
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const PaginationDots = ({ data, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [(index - 1), index, (index + 1)];
        const opacity = new Animated.Value(currentIndex).interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        const scale = new Animated.Value(currentIndex).interpolate({
          inputRange,
          outputRange: [0.8, 1.2, 0.8],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { opacity, transform: [{ scale }] }]}
          />
        );
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
    width: '100%',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginHorizontal: 8,
  },
});

export default PaginationDots;
