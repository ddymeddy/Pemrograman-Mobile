// app/product-detail.tsx
// Mengimpor komponen dari React Native untuk membangun tampilan halaman detail produk.
import { View, Text, StyleSheet, Image } from 'react-native';
// Mengimpor hook `useLocalSearchParams` dari Expo Router untuk mengambil parameter yang dikirim dari halaman sebelumnya.
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetail() {
  // Mengambil parameter produk dari URL atau navigasi sebelumnya
  const { name, price, image, description, stock, category, rating } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Produk</Text>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      )}

      <View style={styles.card}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>{name}</Text>

        <Text style={styles.label}>Harga:</Text>
        <Text style={styles.value}>{price}</Text>

        <Text style={styles.label}>Kategori:</Text>
        <Text style={styles.value}>{category || 'HT / Walkie Talkie'}</Text>

        <Text style={styles.label}>Stok Tersedia:</Text>
        <Text style={styles.value}>{stock || '10 unit tersedia'}</Text>

        <Text style={styles.label}>Rating:</Text>
        <Text style={styles.value}>{rating || '4.8 / 5 ⭐'}</Text>

        <Text style={styles.label}>Deskripsi:</Text>
        <Text style={styles.value}>
          {description || 'HT kualitas terbaik, cocok untuk event, keamanan, dan kegiatan outdoor lainnya.'}
        </Text>
      </View>
    </View>
  );
}

// StyleSheet untuk menentukan tampilan komponen
const styles = StyleSheet.create({
  container: { flex: 1, // Menggunakan seluruh ruang layar yang tersedia
  backgroundColor: '#fdfdfd', // Warna latar belakang utama
  padding: 20, // Memberikan ruang di sekitar konten
 }, 
  title: {
    fontSize: 24, // Ukuran teks judul
    fontWeight: 'bold', // Membuat teks tebal
    marginBottom: 20, // Jarak ke elemen di bawahnya
    textAlign: 'center', // Menjadikan teks berada di tengah
    color: '#333', // Warna teks
  },
  image: {
    width: '100%', // Lebar gambar mengikuti lebar container
    height: 200, // Tinggi gambar tetap 200px
    borderRadius: 12, // Membuat sudut gambar melengkung
    marginBottom: 20, // Jarak ke elemen di bawahnya
    backgroundColor: '#eee', // Warna latar belakang gambar jika belum termuat
  },
  card: {
    backgroundColor: '#fff', // Warna latar belakang kartu
    borderRadius: 10, // Membuat sudut kartu melengkung
    padding: 20, // Memberikan ruang di dalam kartu
    shadowColor: '#000', // Warna bayangan
    shadowOffset: { width: 0, height: 1 }, // Offset bayangan
    shadowOpacity: 0.07, // Intensitas bayangan
    shadowRadius: 4, // Radius bayangan
    elevation: 2, // Efek bayangan untuk Android
  },
  label: {
    fontSize: 16, // Ukuran teks label
    fontWeight: '600', // Membuat teks sedikit tebal
    marginTop: 12, // Jarak antara label dengan elemen di atasnya
    color: '#555', // Warna teks label
  },
  value: {
    fontSize: 16, // Ukuran teks nilai
    color: '#333', // Warna teks utama
    marginTop: 2, // Jarak kecil antara label dan nilai
  },
});
