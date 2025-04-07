// Mengimpor komponen-komponen dasar dari React Native untuk membangun UI aplikasi.
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

// Menggunakan useLocalSearchParams untuk mendapatkan parameter dari URL
// Menggunakan router untuk navigasi dalam aplikasi.
import { useLocalSearchParams, router } from 'expo-router';

export default function ProductDetail() {
// Mendapatkan parameter produk dari URL
  const { name, price, description, stock, category, rating, image } = useLocalSearchParams();

  return (
// Menggunakan ScrollView agar konten dapat di-scroll jika melebihi layar
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detail Produk</Text>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.productName}>{name}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{category}</Text>
          </View>
        </View>

        <Text style={styles.price}>{price}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.stars}>
            {'⭐'.repeat(Math.floor(Number(rating) || 0))} ({rating}/5)
          </Text>
        </View>

        <Text style={styles.label}>Stok:</Text>
        <Text style={styles.value}>{stock} unit tersedia</Text>

        <Text style={styles.label}>Deskripsi:</Text>
        <Text style={styles.description}>
          {description || 'HT kualitas terbaik, cocok untuk event, keamanan, dan kegiatan outdoor lainnya.'}
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Sewa Sekarang"
          color="#28a745"
          onPress={() => router.push('/login')}
        />
      </View>
    </ScrollView>
  );
}

// StyleSheet untuk menentukan gaya tampilan komponen
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
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
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    flex: 1,
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginVertical: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    color: '#222',
  },
  value: {
    fontSize: 16,
    color: '#444',
  },
  stars: {
    fontSize: 16,
    color: '#f1c40f',
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginTop: 6,
    lineHeight: 22,
    textAlign: 'justify',
  },
  button: {
    marginTop: 30,
  },
});
