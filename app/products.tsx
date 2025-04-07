// Mengimpor komponen dari React Native untuk membangun tampilan daftar produk.
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
// Mengimpor `router` dari Expo Router untuk navigasi ke halaman detail produk.
import { router } from 'expo-router';

// Daftar produk yang tersedia dalam aplikasi.
const products = [
  {
    id: '1',
    name: 'HT Motorola GP328',
    price: 'Rp50.000 / hari',
    image: require('../assets/baofeng.jpg'), // Menampilkan gambar produk dari direktori lokal.
    description: 'Handy Talky profesional dengan jangkauan luas, cocok untuk event dan operasional lapangan.',
    rating: 4.8,
    stock: 10,
    category: 'Premium',
  },
  {
    id: '2',
    name: 'HT Baofeng BF-888s',
    price: 'Rp35.000 / hari',
    image: require('../assets/baofeng.jpg'),
    description: 'HT ekonomis namun andal untuk komunikasi sehari-hari di area yang tidak terlalu luas.',
    rating: 4.3,
    stock: 25,
    category: 'Ekonomis',
  },
];

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Produk / Jasa</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.info}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.meta}>⭐ {item.rating} | Stok: {item.stock} | Kategori: {item.category}</Text>
              <View style={styles.buttonWrapper}>
                <Button
                    title="Lihat Detail"
                    onPress={() =>
                        router.push({
                        pathname: '/product-detail',
                        params: {
                            name: item.name,
                            price: item.price,
                            description: item.description,
                            stock: item.stock,
                            category: item.category,
                            rating: item.rating,
                            image: Image.resolveAssetSource(item.image).uri,
                        },
                        })
                     }
                    />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// StyleSheet untuk menentukan tampilan komponen
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 8,
  },
  info: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  meta: {
    fontSize: 13,
    color: '#888',
    marginBottom: 10,
  },
  buttonWrapper: {
    alignSelf: 'flex-start',
  },
});