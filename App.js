import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello World!</Text>
      </View>
      
      <View style={styles.content}>
        <Image source={require("./assets/img.png")} style={styles.image}/>
        <Text style={styles.text}>RJ and Hammy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  header: {
    backgroundColor: 'green',
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: 50 + StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50 + StatusBar.currentHeight,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 5,
    margin: 20,
  },

  text: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});