// app/register.tsx
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import { router } from 'expo-router';
import logoImage from '../assets/logo.png'; // Pastikan path dan file benar

export default function Register() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (nama && email && password) {
      // Di sini kamu bisa tambahkan simpan ke database / API kalau mau
      Alert.alert('Registrasi Berhasil', 'Silakan login dengan akun Anda.');
      router.replace('/login'); // Setelah berhasil daftar langsung ke halaman login
    } else {
      Alert.alert('Registrasi Gagal', 'Mohon isi semua kolom.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Nama"
        style={styles.input}
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.button}>
        <Button title="Daftar" onPress={handleRegister} />
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
    width: 300,
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
