
import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '@features/auth/authSlice';
import OnboardingSlide from '../components/OnboardingSlide';
import Pagination from '../components/Pagination';
import NextButton from '../components/NextButton';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Welcome to the App!',
    description: 'This is a description for the first slide.',
    animation: require('../../../../assets/lottie/slide1.json'),
  },
  {
    key: '2',
    title: 'This is the Second Slide',
    description: 'This is a description for the second slide.',
    animation: require('../../../../assets/lottie/slide2.json'),
  },
  {
    key: '3',
    title: 'This is the Third Slide',
    description: 'This is a description for the third slide.',
    animation: require('../../../../assets/lottie/slide3.json'),
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      dispatch(completeOnboarding());
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <Pagination data={slides} currentIndex={currentIndex} />
      <NextButton onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default OnboardingScreen;
