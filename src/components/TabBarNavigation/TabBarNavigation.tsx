import {Dimensions, Pressable, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@rneui/themed';
export const routes = {
  home: {name: 'Home', icon: 'home'},
  customize: {name: 'Customize', icon: 'tachometer'},
  achievement: {name: 'Achievement', icon: 'star'},
};
type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const {width} = Dimensions.get('window');
const TAB_WIDTH = (width + 20) / 4;

const TabBarNavigation = ({state, navigation, descriptors}: Props) => {
  const {theme} = useTheme();
  const translateX = useSharedValue(0);
  const focusedTab = state.index;

  const handleAnimate = (index: number) => {
    'worklet';
    translateX.value = withTiming(index * TAB_WIDTH, {
      duration: 300,
    });
  };
  useEffect(() => {
    runOnUI(handleAnimate)(focusedTab);
  }, [focusedTab]);

  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const styles = StyleSheet.create({
    container: {
      width: TAB_WIDTH,
      height: 40,
      backgroundColor: theme.colors.white,
      zIndex: 0,
      position: 'absolute',
      marginHorizontal: 20,
      borderRadius: 20,
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <Animated.View style={[styles.container, rnStyle]} />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const routeName = route.name.toLowerCase() as keyof typeof routes;
        const icon = routes[routeName]?.icon;
        return (
          <Pressable
            key={`route-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}>
            <FontAwesome
              name={icon}
              size={24}
              color={isFocused ? theme.colors.black : theme.colors.white}
            />
          </Pressable>
        );
      })}
    </>
  );
};

export default TabBarNavigation;
