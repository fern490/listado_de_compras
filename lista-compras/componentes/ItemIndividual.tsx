import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Item } from "../types/Item";

type Props = {
  item: Item;
  alPresionar: () => void;
  alMantenerPresion: () => void;
};

export default function ItemIndividual({
  item,
  alPresionar,
  alMantenerPresion,
}: Props) {
  if (!item) return null;

  return (
    <Pressable
      style={styles.fila}
      onPress={alPresionar}
      onLongPress={alMantenerPresion}
      android_ripple={{ color: "#eee" }}
    >
      <Text style={[styles.texto, item.completado && styles.tachado]}>
        {item.nombre}
      </Text>
      <View
        style={[styles.circulo, item.completado ? styles.hecho : styles.pendiente]}
      >
        {item.completado && <Text style={styles.check}>✓</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "white",
  },
  texto: { fontSize: 16, color: "#333" },
  tachado: { textDecorationLine: "line-through", color: "#aaa" },
  circulo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pendiente: { borderColor: "#ddd" },
  hecho: { borderColor: "#2ecc71", backgroundColor: "#2ecc71" },
  check: { color: "white", fontWeight: "bold", fontSize: 14 },
});
