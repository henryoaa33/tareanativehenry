import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./path-to-logo.png')} style={styles.logo} />
      <Button
        title="Ir"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
