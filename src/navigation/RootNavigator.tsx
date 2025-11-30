
import React from 'react';
import { useSelector } from 'react-redux';
import OnboardingNavigator from './navigators/OnboardingNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';

const RootNavigator = () => {
  const isOnboardingCompleted = useSelector((state) => state.auth.isOnboardingCompleted);
  const token = useSelector((state) => state.auth.token);

  if (!isOnboardingCompleted) {
    return <OnboardingNavigator />;
  }

  if (!token) {
    return <AuthNavigator />;
  }

  return <MainNavigator />;
};

export default RootNavigator;
