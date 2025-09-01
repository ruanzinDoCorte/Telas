import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const medicos = [
  {
    id: "1",
    nome: "Dr. Kalini Jithma",
    especialidade: "Veterinary Behavioral",
    nota: "4.8",
    distancia: "12 km",
    foto: "https://i.ibb.co/7QpKsCX/medica1.jpg",
  },
  {
    id: "2",
    nome: "Dr. D. Deshapriya",
    especialidade: "Veterinary Surgery",
    nota: "4.9",
    distancia: "8 km",
    foto: "https://i.ibb.co/D4gQ2QH/medico1.jpg",
  },
  {
    id: "3",
    nome: "Dr. D. Deshapriya",
    especialidade: "Veterinary Surgery",
    nota: "4.9",
    distancia: "8 km",
    foto: "https://i.ibb.co/D4gQ2QH/medico1.jpg",
  },
  {
    id: "4",
    nome: "Dr. D. Deshapriya",
    especialidade: "Veterinary Surgery",
    nota: "4.9",
    distancia: "8 km",
    foto: "https://i.ibb.co/D4gQ2QH/medico1.jpg",
  },
];

export default function MedicosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas</Text>

      <FlatList
        data={medicos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.image} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.especialidade}>{item.especialidade}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.info}>⭐ {item.nota}</Text>
              <Text style={styles.info}>📍 {item.distancia}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7CC",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#C89FF7",
    borderRadius: 20,
    padding: 15,
    margin: 8,
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  especialidade: {
    fontSize: 12,
    color: "#f2f2f2",
    textAlign: "center",
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  info: {
    fontSize: 12,
    color: "#fff",
  },
  button: {
    backgroundColor: "#8A2BE2",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
