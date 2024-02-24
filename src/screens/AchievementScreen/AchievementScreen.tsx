import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList} from '../../../App';

type Props = NativeStackScreenProps<BottomTabParamList, 'Achievement'>;

function AchievementScreen({navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>This is stack screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default AchievementScreen;
