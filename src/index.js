import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome the App React Native</Text>
    </View>
  );
};

export default App;
