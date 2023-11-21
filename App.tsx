import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import Routes from './Routes';
import Dummydata from './assets/Dummydata';

export default function App() {
  const [initialPage, setInitialPage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedin');
        if (value === 'true') {
          setInitialPage('Tabs');
          const userDetails: any = await AsyncStorage.getItem('userDetails');
          Dummydata.token = JSON.parse(userDetails).token;
        } else {
          setInitialPage('slider');
        }
      } catch (error) {
        console.error("Error reading AsyncStorage: ", error);
        setInitialPage('slider'); // Fallback to slider screen in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {initialPage === '' ? null : <Routes initialPage={initialPage} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
