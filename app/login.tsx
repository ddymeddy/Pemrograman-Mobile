// Mengimpor komponen-komponen dari React Native untuk membangun tampilan login.
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
// Mengimpor router dari Expo Router untuk navigasi antar halaman.
import { router } from 'expo-router';
// Mengimpor gambar logo yang akan ditampilkan di halaman login.
import logoImage from '../assets/logo.png'; // pastikan file ada di assets

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <View style={styles.button}>
        <Button title="Login" onPress={() => router.replace('/')} />
      </View>

      <View style={styles.button}>
        <Button title="Belum punya akun? Register" onPress={() => router.push('/register')} />
      </View>
    </View>
  );
}

// StyleSheet untuk menentukan tampilan komponen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Memenuhi seluruh layar
    backgroundColor: '#f9f9f9',// Warna latar belakang
    padding: 20, // Padding agar konten tidak menempel di tepi layar
    paddingTop: 60, // Memberi jarak dari atas layar
    alignItems: 'center', // Pusatkan semua elemen secara horizontal
  },
  logo: {
    width: 130, // Lebar logo
    height: 130, // Tinggi logo
    marginBottom: 10, // Jarak antara logo dan elemen di bawahnya
  },
  title: {
    fontSize: 24, // Ukuran teks judul
    fontWeight: 'bold', // Membuat teks tebal
    marginBottom: 20, // Jarak ke elemen di bawahnya
    textAlign: 'center', // Posisi teks di tengah
    color: '#333', // Warna teks
  },
  input: {
    borderWidth: 1, // Ketebalan border
    borderColor: '#ccc', // Warna border
    borderRadius: 8, // Membuat sudut border melengkung
    padding: 10, // Padding dalam input field
    marginBottom: 15, // Jarak antar input field
    width: '100%', // Lebar input mengikuti lebar container
    backgroundColor: '#fff', // Warna latar input
  },
  button: {
    marginVertical: 5, // Jarak antar tombol
    width: '100%', // Lebar tombol sesuai dengan container
  },
});
