import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Gallery from '../../screens/Gallery';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from '../../screens/PostScreen';

const Stack = createNativeStackNavigator();

export default function PostStackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
