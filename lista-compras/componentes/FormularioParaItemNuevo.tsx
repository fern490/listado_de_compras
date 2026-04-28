import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  alCompletarFormulario: (nombre: string) => void;
};

export default function FormularioParaItemNuevo({
  alCompletarFormulario,
}: Props) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = () => {
    const limpio = texto.trim();
    if (limpio) {
      alCompletarFormulario(limpio);
      setTexto("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Agregar producto..."
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={manejarEnvio}
      />
      <Pressable style={styles.button} onPress={manejarEnvio}>
        <Text style={styles.buttonText}>Agregar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
