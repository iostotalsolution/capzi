
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const OnboardingSlide = ({ item }) => {
  return (
    <View style={[styles.slide, { width }]}>
      <LottieView source={item.animation} autoPlay loop style={styles.animation} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  animation: {
    width: width * 0.8,
    height: width * 0.8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OnboardingSlide;
