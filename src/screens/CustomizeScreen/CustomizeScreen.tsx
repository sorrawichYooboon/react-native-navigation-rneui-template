import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList} from '../../../App';

type Props = NativeStackScreenProps<BottomTabParamList, 'Customize'>;

function CustomizeScreen({navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>This is customize screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default CustomizeScreen;
