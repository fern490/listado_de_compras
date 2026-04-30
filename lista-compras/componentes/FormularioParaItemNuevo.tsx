import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet, Keyboard } from "react-native";

type Props = {
  alCompletarFormulario: (nombre: string) => void;
};

export default function FormularioParaItemNuevo({
  alCompletarFormulario,
}: Props) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = () => {
    const limpio = texto.trim();
    console.log("ENVIANDO:", limpio);

    if (!limpio) return;

    alCompletarFormulario(limpio);
    setTexto("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Agregar producto..."
        style={styles.input}
        onSubmitEditing={manejarEnvio}
        returnKeyType="done"
        autoCorrect={false}
      />
      <Pressable style={styles.button} onPress={manejarEnvio}>
        <Text style={styles.buttonText}>Agregar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },
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
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});