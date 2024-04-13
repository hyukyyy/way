import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Main from '../../screens/Main';
import { Icon } from 'react-native-paper';
import MyInfo from '../../screens/MyInfo';
import PostStackNavigator from './PostStackNavigator';
import GroupPage from '../../screens/GroupPage';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen
          name="Main"
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
          name="Post"
          component={PostStackNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source={'plus-circle-outline'} size={45} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="GroupPage"
          component={GroupPage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon source={'account'} size={45} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="MyInfo"
          component={MyInfo}
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
