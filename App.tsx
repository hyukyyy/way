import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './screens/Login';
import { PaperProvider } from 'react-native-paper';
import Signup from './screens/Signup';
import ResetPassword from './screens/ResetPassword';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import BottomTabNavigator from './components/navigator/BottomTabNavigator';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

export default App;
