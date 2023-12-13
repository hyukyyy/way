import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

const Menu = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.singleTap}>
        <View>
          <Text>메뉴1-1</Text>
        </View>
      </View>
      <View style={styles.singleTap}>
        <View>
          <Text>메뉴2-1</Text>
        </View>
        <View>
          <Text>메뉴2-2</Text>
        </View>
        <View>
          <Text>메뉴2-3</Text>
        </View>
      </View>
      <View style={styles.singleTap}>
        <View>
          <Text>메뉴3-1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    width: 500,
    display: 'flex',
  },
  circleMenu: {
    borderRadius: 100,
  },
  singleTap: {
    display: 'flex',
    justifyContent: 'center',
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
});

export default Menu;
