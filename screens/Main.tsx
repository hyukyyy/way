import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { getCurrentPosition } from 'react-native-geolocation-service';
import { Marker } from 'react-native-maps';
import { check, request, RESULTS, PERMISSIONS } from 'react-native-permissions';
import { StyleSheet, View } from 'react-native';
import Menu from '../components/main/Menu';

export default function Main() {
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
    getCurrentPosition(
      (position) => {
        console.log(position);
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

  useEffect(() => {
    const onMount = async () => {
      const fineLocationPermission = await check(
        'android.permission.ACCESS_FINE_LOCATION',
      );
      const hasLocationPermission =
        RESULTS.GRANTED === fineLocationPermission ? true : false;

      if (hasLocationPermission) {
        setMyLocationToCurrentLocation();
      } else {
        const requestPermission = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );

        if (RESULTS.GRANTED === requestPermission ? true : false) {
          setMyLocationToCurrentLocation();
        }
      }
    };
    onMount();
  }, []);

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
          // key={index}
          coordinate={myLocation}
          title={'내위치'}
          description={'내위치'}
        />
        <Menu />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
