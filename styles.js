import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      padding: 10, 
      height: '100%',
      borderColor: 'black'
    },
    delButton: {
      height: 100,
      width: 20,
      position: 'absolute',
      right: 10,
      top: 15,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 15
    },
    addButton: {
      position: 'absolute',
      bottom: 10,
      right: 5,
    },
    item: {
      borderWidth: 2,
      marginBottom: 5,
      padding: 5,
      borderRadius: 15
    },
    containerTopBar: {
      flex: 1,
      paddingTop: 20,
      marginTop: 20,
    },
    containerList: {
      flex: 1,
    },
    basicText: {
      fontSize: 13,
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 15,
      width: '100%',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    title: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default styles;