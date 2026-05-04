import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
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
  return (
    <Pressable
      onPress={alPresionar}
      onLongPress={alMantenerPresion}
      style={styles.row}
    >
      <Text style={[styles.rowText, item.completado && styles.done]}>
        {item.nombre}
      </Text>
      <Text
        style={[
          styles.pill,
          item.completado ? styles.pillDone : styles.pillTodo,
        ]}
      >
        {item.completado ? "✔" : "•"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowText: { fontSize: 16 },
  done: { textDecorationLine: "line-through", color: "#999" },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
  },
  pillTodo: { backgroundColor: "#eee", color: "#666" },
  pillDone: { backgroundColor: "#2ecc71", color: "#fff" },
});
