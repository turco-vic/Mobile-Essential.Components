import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World!</Text>
      <Image source={require("./assets/img.png")} style={styles.image}/>
      <Text style={styles.text}>RJ and Hammy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'green',
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  image: {
    width: 500,
    height: 500,
    borderRadius: 25,
    margin: 20,
  },

  text: {
    fontSize: 50,
    color: 'green',
    fontWeight: 'bold',
  },
});