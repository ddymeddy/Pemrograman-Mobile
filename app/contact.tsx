// Mengimpor komponen dari React Native untuk membangun tampilan aplikasi.
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Contact() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Kami</Text>

      <Text style={styles.paragraph}>
        Kami adalah tim mahasiswa yang membangun platform penyewaan Handy Talky (HT) berbasis aplikasi mobile.
        Tujuan kami adalah membantu individu, event organizer, dan organisasi dalam mendapatkan layanan komunikasi
        cepat dan efisien melalui sistem sewa HT yang mudah diakses.
      </Text>

      <Text style={styles.sectionTitle}>Misi Kami</Text>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>• Menyediakan layanan sewa HT yang terpercaya dan profesional</Text>
        <Text style={styles.bullet}>• Menawarkan harga kompetitif dan fleksibel</Text>
        <Text style={styles.bullet}>• Menghadirkan platform digital yang mudah digunakan</Text>
        <Text style={styles.bullet}>• Mendukung event dan kegiatan dengan komunikasi yang lancar</Text>
      </View>

      <Text style={styles.sectionTitle}>Tim Kami</Text>

      {members.map((member, index) => (
        <View key={index} style={styles.profileCard}>
          <Image source={member.photo} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
            <View style={styles.socialContainer}>
              <Text>📷 {member.instagram}</Text>
              <Text> {member.NIM}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

// Data anggota tim dalam bentuk array
const members = [
  {
    name: 'Meddy',
    role: 'CEO & Vision Strategist',
    instagram: '@kdmeddy',
    NIM: '2201020003',
    photo: require('../assets/meddy.jpeg'),
  },
  {
    name: 'Jere',
    role: 'Desain & Branding',
    instagram: '@jere.design',
    NIM: '2201020029',
    photo: require('../assets/meddy.jpeg'),
  },
  {
    name: 'Boy',
    role: 'Konten & Sosial Media',
    instagram: '@boy.content',
    NIM: '2201020035',
    photo: require('../assets/meddy.jpeg'),
  },
  {
    name: 'Mandara',
    role: 'Teknologi & Pengembangan Aplikasi',
    instagram: '@mandara.dev',
    NIM: '2201020036',
    photo: require('../assets/meddy.jpeg'),
  },
];

// StyleSheet untuk menentukan gaya tampilan komponen
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
    marginBottom: 20,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#222',
  },
  bulletContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  bullet: {
    fontSize: 15,
    marginBottom: 6,
    color: '#555',
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  socialContainer: {
    gap: 2,
  },
});
