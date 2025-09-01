import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Consultas() {
  const [pet, setPet] = useState("Doginho");
  const [especialidade, setEspecialidade] = useState("Vacinador");
  const [dia, setDia] = useState("18/09/2025");
  const [hora, setHora] = useState("11:30");
  const [motivo, setMotivo] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultas</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Pet</Text>
            <Picker
              selectedValue={pet}
              style={styles.picker}
              onValueChange={(itemValue) => setPet(itemValue)}
            >
              <Picker.Item label="Doginho" value="Doginho" />
              <Picker.Item label="Mia" value="Mia" />
            </Picker>
          </View>

          <View style={styles.col}>
            <Text style={styles.label}>Especialidade</Text>
            <Picker
              selectedValue={especialidade}
              style={styles.picker}
              onValueChange={(itemValue) => setEspecialidade(itemValue)}
            >
              <Picker.Item label="Vacinador" value="Vacinador" />
              <Picker.Item label="Clínico" value="Clínico" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Dia</Text>
            <TextInput style={styles.input} value={dia} />
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Horas</Text>
            <TextInput style={styles.input} value={hora} />
          </View>
        </View>

        <Text style={styles.label}>Motivo</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Insira aqui o texto"
          multiline
          numberOfLines={4}
          value={motivo}
          onChangeText={setMotivo}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6d9",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fffbe9",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  picker: {
    backgroundColor: "#ede1f8",
    borderRadius: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textarea: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    height: 100,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  botao: {
    backgroundColor: "#8c00ff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
