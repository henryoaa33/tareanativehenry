import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre: {contact.name}</Text>
      <Text style={styles.label}>Teléfono: {contact.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ContactDetailScreen;
