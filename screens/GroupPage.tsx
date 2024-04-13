import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { theme } from '../styles/themes/theme';
import { httpGet, httpPaths } from '../api/httpClient';
import { GroupInterface } from '../data/types/DataTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';

export default function GroupPage() {
  const token = useSelector(
    (state: RootState) => state.userReducer.accessToken,
  );

  // groupId: number;
  // name: string;
  // isPremium: boolean;
  // users: {
  //     userId: number;
  //     username: string;
  //     password: null;
  //     nickname: string;
  //     activated: boolean;
  //     groups: never[];
  //     authorities: string[];
  // }[];
  const [groups, setGroups] = useState([
    {
      groupId: 1,
      name: '테스트 그룹1',
      isPremium: false,
      users: [
        {
          userId: 1,
          username: 'ftkem2003',
          password: null,
          nickname: 'hyukyyy',
          activated: true,
          groups: [],
          authorities: ['ROLE_USER'],
        },
      ],
    },
  ]);

  useEffect(() => {
    const getUserGroup = async () => {
      try {
        const res = await httpGet(httpPaths.getUserGroup, {}, token);
        console.log(res);
        if (res?.data == null) {
          return;
        } else {
          // setGroups(res?.data?.groups);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getUserGroup();
  }, [token]);

  const renderItem = ({ item }: { item: GroupInterface }) => {
    return (
      <View style={[styles.itemContainer]}>
        <Text style={[styles.itemTitle]}>{item?.name}</Text>
        <View>
          <Text>상세</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={groups} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.primaryContainer,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  itemTitle: {
    backgroundColor: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
