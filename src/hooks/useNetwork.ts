
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useAppDispatch } from './useRedux';
import { setNetworkStatus } from '@features/network/networkSlice';

export const useNetwork = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      dispatch(setNetworkStatus(state.isConnected ?? false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
