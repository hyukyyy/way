import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './screens/Login';
import { PaperProvider } from 'react-native-paper';
import Signup from './screens/Signup';
import ResetPassword from './screens/ResetPassword';
import Main from './screens/Main';
import MyInfo from './screens/MyInfo';
import GroupPage from './screens/GroupPage';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Gallery from './screens/Gallery';

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
              name="MyInfo"
              component={MyInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupPage"
              component={GroupPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gallery"
              component={Gallery}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Main"
              component={Main}
              // options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

export default App;
