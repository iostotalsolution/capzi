
import React, { useRef, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';
import PaginationDots from '../components/PaginationDots';
import { Button } from '../../../components/ui/Button';

const slides = [
  {
    key: '1',
    lottie: require('../../../assets/lottie/slide1.json'),
    title: 'Welcome to Capzi',
    subtitle: 'The best ride-booking app in town.',
  },
  {
    key: '2',
    lottie: require('../../../assets/lottie/slide2.json'),
    title: 'Request a Ride',
    subtitle: 'Easily request a ride from your current location.',
  },
  {
    key: '3',
    lottie: require('../../../assets/lottie/slide3.json'),
    title: 'Track Your Driver',
    subtitle: 'Track your driver in real-time and know their exact arrival time.',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      <PaginationDots data={slides} currentIndex={currentIndex} />
      <View style={styles.buttonContainer}>
        <Button title="Log in" onPress={() => navigation.navigate('Auth')} />
        <Button title="I'm new, sign me up" onPress={() => navigation.navigate('Auth')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});

export default OnboardingScreen;
