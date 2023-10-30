import styles from '../styles';
import { Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.titleText}>Welcome to Notes.</Text>
        <Image source={require('../assets/notes.png')} style={{ width: 300, height: 300 }} />
        <View style={styles.containerButton}>
          <Link to="/Add">
            <View style={{ backgroundColor: 'black', padding: 10 }}>
              <Text style={{ color: 'white' }}>New Note</Text>
            </View>
          </Link>
          <Text style={{margin: 10}}>
            {'\n'}
          </Text>
          <Link to="/List">
            <View style={{ backgroundColor: 'black', padding: 10 }}>
              <Text style={{ color: 'white' }}>Notes List</Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
