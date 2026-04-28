import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Item } from "./Item";

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
      style={styles.row}
      onPress={alPresionar}
      onLongPress={alMantenerPresion}
    >
      <Text style={[styles.text, item.done && styles.done]}>{item.name}</Text>
      <Text
        style={[styles.pill, item.done ? styles.pillDone : styles.pillTodo]}
      >
        {item.done ? "✔" : "•"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: { fontSize: 16 },
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
