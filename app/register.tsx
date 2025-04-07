import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import logoImage from '../assets/logo.png'; // Pastikan path dan file benar

export default function Register() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Register</Text>

      <TextInput placeholder="Nama" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <View style={styles.button}>
        <Button title="Daftar" onPress={() => router.replace('/login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});
