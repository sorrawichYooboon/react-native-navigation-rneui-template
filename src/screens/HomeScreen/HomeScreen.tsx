import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Input, Text, CheckBox, useTheme, LinearProgress} from '@rneui/themed';
import {BottomTabParamList} from '../../../App';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {EisenhowerMatrix} from './constants';
import {Button} from '@rneui/base';
import {SwipeListView} from 'react-native-swipe-list-view';
import {homeScreenStyle} from './homeScreenStyle';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

function HomeScreen({navigation}: Props): React.JSX.Element {
  const {theme} = useTheme();
  const styles = homeScreenStyle(theme);
  const [index, setIndex] = useState(0);
  const [doList, setDoList] = useState<string[]>([]);
  const [decideList, setDecideList] = useState<string[]>([]);
  const [delegateList, setDelegateList] = useState<string[]>([]);
  const [deleteList, setDeleteList] = useState<string[]>([]);
  const [check, setCheck] = useState(false);
  const addTaskInputRef = useRef<any>(null);

  const renderSwitch = (index: number) => {
    let listItems = [] as string[];
    switch (index) {
      case 0:
        listItems = doList;
        break;
      case 1:
        listItems = decideList;
        break;
      case 2:
        listItems = delegateList;
        break;
      case 3:
        listItems = deleteList;
        break;
    }

    return (
      <SwipeListView
        data={listItems}
        renderItem={renderItems}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowOpen}
      />
    );
  };

  const onRowOpen = (rowKey: any) => {
    // console.log('Opened row with key:', rowKey);
  };

  const renderHiddenItem = (rowData: any, rowMap: any) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => {
          deleteItem(rowData, rowMap);
        }}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteItem = (rowData: any, rowMap: any) => {
    let list = [] as string[];
    switch (index) {
      case 0:
        list = doList;
        break;
      case 1:
        list = decideList;
        break;
      case 2:
        list = delegateList;
        break;
      case 3:
        list = deleteList;
        break;
    }

    const newData = [...list];
    const rowValue = rowData.item;
    const indexs = newData.findIndex(item => item === rowValue);
    newData.splice(indexs, 1);

    // const prevIndex = doList.findIndex(item => item === rowKey);
    // console.log(prevIndex);
    // newData.splice(prevIndex, 1);
    switch (index) {
      case 0:
        setDoList(newData);
        break;
      case 1:
        setDecideList(newData);
        break;
      case 2:
        setDelegateList(newData);
        break;
      case 3:
        setDeleteList(newData);
        break;
    }
  };

  const renderItems = (rowData: any) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}>
        <CheckBox
          style={{width: '10%'}}
          center
          checked={check}
          onPress={() => setCheck(!check)}
        />
        <View
          key={index}
          style={{
            height: 64,
            width: '86%',
            marginLeft: -10,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: 16,
          }}>
          <Text>{rowData.item}</Text>
        </View>
      </View>
    );
  };

  const handleAddTask = () => {
    if (addTaskInputRef.current === null) {
      return;
    }

    const task = addTaskInputRef.current.value;
    if (task) {
      switch (index) {
        case 0:
          setDoList([...doList, task]);
          break;
        case 1:
          setDecideList([...decideList, task]);
          break;
        case 2:
          setDelegateList([...delegateList, task]);
          break;
        case 3:
          setDeleteList([...deleteList, task]);
          break;
      }
      addTaskInputRef.current.clear();
    }
  };

  const handleViewTask = (index: number) => {
    setIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Input
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          inputStyle={{
            fontFamily: 'Mandali',
            fontSize: 16,
          }}
          ref={addTaskInputRef}
          onChange={e => (addTaskInputRef.current.value = e.nativeEvent.text)}
          rightIcon={
            <FontAwesome
              onPress={handleAddTask}
              name="plus"
              size={24}
              color={theme.colors.secondary}
            />
          }
          placeholder="What you would like to do?"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Button
          titleStyle={{
            fontFamily: 'Mandali',
            fontSize: 12,
            color: index === 0 ? theme.colors.black : theme.colors.white,
          }}
          buttonStyle={{
            borderColor: index === 0 ? theme.colors.black : theme.colors.white,
            borderWidth: 1,
            width: 88,
            borderRadius: 50,
            paddingHorizontal: 12,
            backgroundColor:
              index === 0 ? theme.colors.white : theme.colors.black,
          }}
          onPress={() => handleViewTask(0)}>
          DO
        </Button>
        <Button
          titleStyle={{
            fontFamily: 'Mandali',
            fontSize: 12,
            color: index === 1 ? theme.colors.black : theme.colors.white,
          }}
          buttonStyle={{
            borderColor: index === 1 ? theme.colors.black : theme.colors.white,
            borderWidth: 1,
            width: 88,
            borderRadius: 50,
            paddingHorizontal: 12,
            backgroundColor:
              index === 1 ? theme.colors.white : theme.colors.black,
          }}
          onPress={() => handleViewTask(1)}>
          DECIDE
        </Button>
        <Button
          titleStyle={{
            fontFamily: 'Mandali',
            fontSize: 12,
            color: index === 2 ? theme.colors.black : theme.colors.white,
          }}
          buttonStyle={{
            borderColor: index === 2 ? theme.colors.black : theme.colors.white,
            borderWidth: 1,
            width: 88,
            borderRadius: 50,
            paddingHorizontal: 12,
            backgroundColor:
              index === 2 ? theme.colors.white : theme.colors.black,
          }}
          onPress={() => handleViewTask(2)}>
          DELEGATE
        </Button>
        <Button
          titleStyle={{
            fontFamily: 'Mandali',
            fontSize: 12,
            color: index === 3 ? theme.colors.black : theme.colors.white,
          }}
          buttonStyle={{
            borderColor: index === 3 ? theme.colors.black : theme.colors.white,
            borderWidth: 1,
            width: 88,
            borderRadius: 50,
            paddingHorizontal: 12,
            backgroundColor:
              index === 3 ? theme.colors.white : theme.colors.black,
          }}
          onPress={() => handleViewTask(3)}>
          DELETE
        </Button>
      </View>
      <View>
        {/* {Array.from({length: EisenhowerMatrix.length}).map((_, i) => (
          <View key={i} style={{width: '100%', height: '100%'}}>
            {renderSwitch(i)}
          </View>
        ))} */}
        {renderSwitch(index)}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
