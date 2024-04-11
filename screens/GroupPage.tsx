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

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getUserGroup = async () => {
      try {
        const res = await httpGet(httpPaths.getUserGroup, {}, token);
        console.log(res);
        if (res?.data == null) {
          return;
        } else {
          setGroups(res?.data?.groups);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getUserGroup();
  }, [token]);

  const renderItem = ({ item }: { item: GroupInterface }) => {
    return (
      <View>
        <Text>{item?.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Groups</Text>
      </View>
      <FlatList data={groups} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: theme.colors.secondary,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.primary,
  },
});
