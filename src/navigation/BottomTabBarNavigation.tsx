import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import TabBarNavigation from '../components/TabBarNavigation/TabBarNavigation';
import {useTheme} from '@rneui/themed';

const BottomTabBarNavigation = ({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: theme.colors.black,
      flexDirection: 'row',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      bottom: 40,
      left: 20,
      right: 20,
      height: 60,
      flex: 1,
      elevation: 0,
      borderRadius: 15,
      shadowColor: '#000000',
      shadowOpacity: 0.05,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
  });

  return (
    <View style={styles.tabBarStyle}>
      <TabBarNavigation
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </View>
  );
};

export default BottomTabBarNavigation;
