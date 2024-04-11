import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Main from '../../screens/Main';
import { Icon } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen
          name="Main1"
          component={Main}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source="home-outline" size={45} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Main2"
          component={Main}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source={'search-web'} size={45} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Main3"
          component={Main}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source={'plus-circle-outline'} size={45} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Main4"
          component={Main}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source={'account'} size={45} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Main5"
          component={Main}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source={'account-outline'} size={45} />,
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
