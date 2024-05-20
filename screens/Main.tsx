import React, { useCallback, useState } from 'react';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Marker } from 'react-native-maps';
import { check, request, RESULTS, PERMISSIONS } from 'react-native-permissions';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function Main({ navigation }: any) {
  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const onRegionChange = (region: any, details: any) => {
    console.log('region : ', region);
    console.log('details : ', details);
    console.log('myLocation : ', myLocation);
  };

  const setMyLocationToCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  useFocusEffect(
    useCallback(() => {
      const onMount = async () => {
        const fineLocationPermission = await check(
          'android.permission.ACCESS_FINE_LOCATION',
        );
        const hasLocationPermission =
          RESULTS.GRANTED === fineLocationPermission ? true : false;

        if (hasLocationPermission) {
          setMyLocationToCurrentLocation();
        } else {
          await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
      };
      onMount();
    }, []),
  );

  return (
    <>
      <MapView
        style={styles.fullScreen}
        region={{
          ...myLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={onRegionChange}
      >
        <Marker
          coordinate={myLocation}
          title={'내위치'}
          description={'내위치'}
        />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
