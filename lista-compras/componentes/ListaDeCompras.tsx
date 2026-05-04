import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Item } from "../types/Item";
import ItemIndividual from "./ItemIndividual";

type Props = {
  items: Item[];
  alPresionarItem: (id: string) => void;
  alEliminarItem: (id: string) => void;
};

export default function ListaDeCompras({
  items,
  alPresionarItem,
  alEliminarItem,
}: Props) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemIndividual
          item={item}
          alPresionar={() => alPresionarItem(item.id)}
          alMantenerPresion={() => alEliminarItem(item.id)}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.empty}>
          Sin productos. ¡Agregá el primero! 😊
        </Text>
      }
      ItemSeparatorComponent={() => <View style={styles.sep} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}

const styles = StyleSheet.create({
  sep: { height: 1, backgroundColor: "#eee" },
  empty: { textAlign: "center", color: "#777", marginTop: 24 },
});