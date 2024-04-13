import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { Text, TextInput } from 'react-native-paper';
import { theme } from '../styles/themes/theme';
import { PhotoIdentifier } from '@react-native-camera-roll/camera-roll';

export default function PostScreen({ route, navigation }: any) {
  const { imgList } = route.params;

  useEffect(() => {
    console.log(imgList);
  }, [imgList, route]);

  useEffect(() => {
    const styles = StyleSheet.create({
      headerNextBtnWrapper: { marginRight: 10 },
      headerNextBtnText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: 15,
      },
    });
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    const headerRight = () => {
      return (
        <TouchableOpacity style={[styles.headerNextBtnWrapper]}>
          <Text style={[styles.headerNextBtnText]}>submit</Text>
        </TouchableOpacity>
      );
    };

    navigation.setOptions({
      headerRight: headerRight,
    });
  }, [navigation]);

  return (
    <>
      <MapView
        style={[styles.mapView]}
        region={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {imgList.map((photo: PhotoIdentifier) => {
          const coordinate: LatLng = {
            latitude: photo.node.location?.latitude
              ? photo.node.location?.latitude
              : 0,
            longitude: photo.node.location?.longitude
              ? photo.node.location?.longitude
              : 0,
          };

          return (
            <Marker
              key={photo.node.id}
              coordinate={coordinate}
              title={'내위치'}
              description={'내위치'}
            >
              <TouchableOpacity style={[styles.markerBackground]}>
                <Image
                  style={[styles.markerImg]}
                  source={{ uri: photo.node.image.uri }}
                />
              </TouchableOpacity>
            </Marker>
          );
        })}
      </MapView>

      <TextInput placeholder="코멘트를 추가하세요" style={[styles.textArea]} />
    </>
  );
}

const styles = StyleSheet.create({
  mapView: {
    flex: 4,
  },
  textArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  markerBackground: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 35,
    height: 35,
  },
  markerImg: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});
