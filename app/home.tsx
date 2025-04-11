// app/home.tsx
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bannerImage from '../assets/logo.png';

export default function Home() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    router.replace('/login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>BALI MYSTIC</Text>
        <View style={styles.topButtons}>
          <View style={styles.inlineButton}>
            <Button title="Logout" onPress={handleLogout} color="#dc3545" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Selamat Datang di Aplikasi Sewa HT</Text>

      <Image
        source={bannerImage}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.paragraph}>
        Kami menyediakan layanan penyewaan Handy Talky (HT) berkualitas tinggi untuk keperluan event, keamanan,
        kegiatan outdoor, dan lainnya. Dapatkan kemudahan berkomunikasi tanpa hambatan dengan perangkat terbaik kami.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Kenapa Memilih Kami?</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Produk berkualitas dari merk ternama</Text>
          <Text style={styles.bullet}>• Harga terjangkau dan fleksibel</Text>
          <Text style={styles.bullet}>• Layanan cepat dan responsif</Text>
          <Text style={styles.bullet}>• Gratis konsultasi kebutuhan HT</Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title="Lihat Produk" onPress={() => router.push('/products')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Tentang Kami" onPress={() => router.push('/contact')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  topButtons: {
    flexDirection: 'row',
  },
  inlineButton: {
    marginLeft: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    borderRadius: 12,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
    marginBottom: 20,
    textAlign: 'justify',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  bulletContainer: {
    marginLeft: 10,
  },
  bullet: {
    fontSize: 15,
    marginBottom: 5,
    color: '#555',
  },
  buttonGroup: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    marginVertical: 10,
  },
});
