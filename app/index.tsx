import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [pet, setPet] = useState("Doginho");
  const [especialidade, setEspecialidade] = useState("Vacinador");
  const [dia, setDia] = useState("18/09/2025");
  const [hora, setHora] = useState("11:30");
  const [motivo, setMotivo] = useState("");

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Consultas</Text>

      {/* Card */}
      <View style={styles.card}>
        {/* Linha Pet + Especialidade */}
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pet</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={pet}
                onValueChange={(itemValue) => setPet(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Doginho" value="Doginho" />
                <Picker.Item label="Mia" value="Mia" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Especialidade</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={especialidade}
                onValueChange={(itemValue) => setEspecialidade(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Vacinador" value="Vacinador" />
                <Picker.Item label="Clínico Geral" value="Clinico" />
              </Picker>
            </View>
          </View>
        </View>

        {/* Linha Dia + Hora */}
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Dia</Text>
            <TextInput style={styles.input} value={dia} onChangeText={setDia} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Horas</Text>
            <TextInput style={styles.input} value={hora} onChangeText={setHora} />
          </View>
        </View>

        {/* Motivo */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Motivo</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Insira aqui o texto"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={motivo}
            onChangeText={setMotivo}
          />
        </View>

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAD9", // fundo amarelo claro
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  card: {
    backgroundColor: "#FFFBEA",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    flex: 1,
    marginRight: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  pickerWrapper: {
    backgroundColor: "#D9A9F7", // lilás igual ao print
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 40,
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textarea: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    textAlignVertical: "top",
    height: 100,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#8A2BE2", // roxo forte
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
