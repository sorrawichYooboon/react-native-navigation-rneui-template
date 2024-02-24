import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList} from '../../../App';

type Props = NativeStackScreenProps<BottomTabParamList, 'Achievement'>;

function AchievementScreen({navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>This is stack screen</Text>
    </SafeAreaView>
  );
}

export default AchievementScreen;
