
import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useAppState = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }

    appState.current = nextAppState;
    console.log('AppState', appState.current);
  };
};
