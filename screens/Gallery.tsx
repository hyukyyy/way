import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, Text } from 'react-native-paper';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { theme } from '../styles/themes/theme';

const vw = Dimensions.get('window').width;

const Gallery = () => {
  useEffect(() => {
    permissionCheck();
  }, []);

  const [permission, setPermission] = useState(false);
  const [selectedImg, setSelectedImg] = useState<PhotoIdentifier>();
  const [selectedImgMulti, setSelectedImgMulti] = useState<PhotoIdentifier[]>(
    [],
  );
  const [imgList, setImgList] = useState<PhotoIdentifier[]>([]);
  const [isMulti, setIsMulti] = useState<Boolean>(false);

  useEffect(() => {
    if (permission) {
      const getPhotos = async () => {
        try {
          const { edges } = await CameraRoll.getPhotos({
            first: 30,
          });

          if (Array.isArray(edges)) {
            setImgList(edges);
          }
          console.log('edges :', edges);
        } catch (error) {
          console.log('getPhoto', error);
        }
      };
      getPhotos();
    }
  }, [permission]);

  useEffect(() => {
    if (!isMulti) {
      setSelectedImgMulti([]);
    }
  }, [isMulti]);

  const permissionCheck = () => {
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') return;
    const platformPermissions =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.MEDIA_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
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
  const styles = StyleSheet.create({
    container: { flex: 1 },
    selectedContainer: {
      width: '100%',
      height: '50%',
    },
    menuContainer: {
      padding: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuBtnContainer: {
      flexDirection: 'row',
    },
    photoContainer: {
      width: vw,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    photo: {
      width: vw / 4,
      height: 100,
    },
    photoImage: {
      width: '100%',
      height: '100%',
    },
    menuBtn1: {
      backgroundColor: isMulti ? theme.colors.secondary : 'grey',
      borderRadius: 100,
      width: 35,
      height: 35,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#a0a0a0',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    menuBtn2: {
      backgroundColor: 'grey',
      borderRadius: 100,
      width: 35,
      height: 35,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#a0a0a0',
      borderStyle: 'solid',
      borderWidth: 0.5,
    },
    numbering: {
      backgroundColor: theme.colors.secondary,
      position: 'absolute',
      top: 5,
      right: 5,
      zIndex: 10,
      borderRadius: 100,
      width: 25,
      height: 25,
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    numberingDeactive: {
      backgroundColor: 'grey',
      position: 'absolute',
      top: 5,
      right: 5,
      zIndex: 10,
      borderRadius: 100,
      width: 25,
      height: 25,
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    whiteText: {
      color: 'white',
    },
  });

  return permission ? (
    <View style={[styles.container]}>
      <Image
        style={[styles.selectedContainer]}
        source={{ uri: selectedImg ? selectedImg.node.image.uri : undefined }}
      />
      <View style={[styles.menuContainer]}>
        {/* 앨범별 사진 고르는 기능 우선 자리만 잡아놓자 */}
        <Text>{''}</Text>
        <View style={[styles.menuBtnContainer]}>
          <TouchableOpacity
            onPress={() => setIsMulti(!isMulti)}
            style={[styles.menuBtn1]}
          >
            <Icon color="white" size={20} source={'card-multiple-outline'} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuBtn2]}>
            <Icon color="white" size={20} source={'camera-outline'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={[styles.photoContainer]}>
        {imgList.map((item) => {
          const targetIdx = selectedImgMulti.findIndex(
            (s) => s.node.id === item.node.id,
          );
          const isSelected = targetIdx > -1;

          return (
            <TouchableOpacity
              style={[styles.photo]}
              onPress={() => setSelectedImg(item)}
              key={item.node.id}
            >
              {isMulti && (
                <TouchableOpacity
                  onPress={() => {
                    if (selectedImgMulti.length >= 5) return;
                    if (!isSelected) {
                      setSelectedImgMulti([...selectedImgMulti, item]);
                    } else {
                      const newList = [...selectedImgMulti];
                      newList.splice(targetIdx, 1);
                      setSelectedImgMulti(newList);
                    }
                  }}
                  style={[
                    isSelected ? styles.numbering : styles.numberingDeactive,
                  ]}
                >
                  <Text style={[styles.whiteText]}>
                    {targetIdx < 0 ? '' : targetIdx + 1}
                  </Text>
                </TouchableOpacity>
              )}
              <Image
                source={{ uri: item.node.image.uri }}
                style={[styles.photoImage]}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <View>
      <Text>권한실패 페이지</Text>
    </View>
  );
};

export default Gallery;
