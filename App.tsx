import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from '@rneui/themed';
import {themeRNEUI} from './src/styles/theme';
import CustomizeScreen from './src/screens/CustomizeScreen/CustomizeScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AchievementScreen from './src/screens/AchievementScreen/AchievementScreen';
import BottomTabBarNavigation from './src/navigation/BottomTabBarNavigation';
import {View} from 'react-native';

export type BottomTabParamList = {
  Customize: undefined;
  Home: undefined;
  Achievement: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={themeRNEUI}>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          tabBar={props => <BottomTabBarNavigation {...props} />}>
          <BottomTab.Screen name="Customize" component={CustomizeScreen} />
          <BottomTab.Screen name="Home" component={HomeScreen} />
          <BottomTab.Screen name="Achievement" component={AchievementScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
