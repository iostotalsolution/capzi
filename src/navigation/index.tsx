
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';
import OnboardingScreen from '@features/onboarding/screens/OnboardingScreen';
import { useAppSelector } from '@hooks/useRedux';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; // or a loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch && <Stack.Screen name="Onboarding" component={OnboardingScreen} />}
        {token ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
