import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import RootNavigator from './components/navigator/RootNavigator';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Provider store={Store}>
        <RootNavigator />
      </Provider>
    </PaperProvider>
  );
}

export default App;
