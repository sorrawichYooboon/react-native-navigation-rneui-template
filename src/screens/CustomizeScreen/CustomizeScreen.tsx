import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList} from '../../../App';

type Props = NativeStackScreenProps<BottomTabParamList, 'Customize'>;

function CustomizeScreen({navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>This is customize screen</Text>
    </SafeAreaView>
  );
}

export default CustomizeScreen;
