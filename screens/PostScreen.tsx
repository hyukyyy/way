import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import MapView from 'react-native-maps';

export default function PostScreen({ route }: any) {
  const { imgList } = route.params;

  useEffect(() => {
    console.log(imgList);
  }, [imgList, route]);

  return (
    <>
      <MapView
        style={styles.fullScreen}
        region={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinate={myLocation}
          title={'내위치'}
          description={'내위치'}
        /> */}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
