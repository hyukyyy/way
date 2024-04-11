import React, { useEffect, useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { Text } from 'react-native-paper';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';

const Gallery = () => {
  useEffect(() => {
    permissionCheck();
  }, []);

  const [permission, setPermission] = useState(false);

  const permissionCheck = () => {
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') return;
    const platformPermissions =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;
    const requestCameraPermission = async () => {
      try {
        const result = await request(platformPermissions);
        result === RESULTS.GRANTED
          ? setPermission(true)
          : Alert.alert('카메라 권한을 허용해주세요');
      } catch (err) {
        Alert.alert('Camera permission err');
        console.warn(err);
      }
    };
    requestCameraPermission();
  };

  return permission ? (
    <View>
      <Text>{'갤러리 페이지'}</Text>
    </View>
  ) : (
    <View>
      <Text>권한실패 페이지</Text>
    </View>
  );
};

export default Gallery;
