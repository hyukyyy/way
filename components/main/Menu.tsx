import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { theme } from '../../styles/themes/theme';

const Menu = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.singleTap}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.backgroundWhite, styles.circleMenu]}
            onPress={() => navigation.navigate('MyInfo')}
          >
            <Text>MY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tripleTap}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.backgroundWhite, styles.circleMenu]}
            onPress={() => navigation.navigate('GroupPage')}
          >
            <Text>Group</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.circleMenu, styles.startMenu]}
          >
            <Text style={[styles.startMenuText]}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Gallery')}
            style={[styles.backgroundWhite, styles.circleMenu]}
          >
            <Text>갤러리</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 25,
    left: '50%',
    transform: [{ translateX: -150 }],
    height: 200,
    width: 300,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  circleMenu: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  singleTap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tripleTap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  startMenu: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startMenuText: {
    color: theme.colors.secondaryText,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Menu;
