
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/store';
import RootNavigator from '@navigation';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@theme/theme';
import { ErrorBoundary } from '@features/common/components/ErrorBoundary';
import { GlobalLoading } from '@features/common/components/GlobalLoading';
import { ModalManager } from '@features/common/components/ModalManager';
import { useNetwork } from '@hooks/useNetwork';
import { useAppState } from '@hooks/useAppState';

const App = () => {
  useNetwork();
  useAppState();

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RootNavigator />
            <GlobalLoading />
            <ModalManager />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
