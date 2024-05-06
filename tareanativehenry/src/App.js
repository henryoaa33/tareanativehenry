
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    if (name.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }
    if (phone.length < 8) {
      alert('El número de contacto debe tener al menos 8 dígitos.');
      return;
    }
    setContacts([...contacts, { name, phone }]);
    setName('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre Contacto"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Telefono Contacto"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Agregar" onPress={handleAddContact} />
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.phone}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
