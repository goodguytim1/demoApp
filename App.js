import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput,  View } from 'react-native';
import Profile from './Profile'

export default function App() {
  const [name, setName] = useState('Tim');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <TextInput value={name} onChangeText={(text) => setName(text)}/>
      <Profile text='Hello World'/>
      <Profile text={name}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
  },
});
