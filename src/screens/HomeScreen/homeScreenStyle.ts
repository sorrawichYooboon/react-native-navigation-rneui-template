import {StyleSheet} from 'react-native';

export const homeScreenStyle = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      height: '100%',
      width: '100%',
    },
    searchBar: {
      display: 'flex',
      flexDirection: 'row',
      margin: 8,
    },
    hiddenContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 64,
      borderRadius: 20,
    },
    hiddenButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
      height: 64,
    },
    deleteButton: {
      backgroundColor: '#E74C3C',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
