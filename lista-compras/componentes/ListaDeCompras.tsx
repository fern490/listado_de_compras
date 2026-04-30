import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Item } from "../types/Item";
import ItemIndividual from "./ItemIndividual";

type Props = {
  items: Item[];
  alPresionarSobreUnItem: (id: string) => void;
  alMantenerPresionSobreUnItem: (id: string) => void;
};

export default function ListaDeCompras({ items, ...props }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        extraData={items}
        keyExtractor={(it) => it.id}

        renderItem={({ item }) => {
          console.log("ITEM EN LISTA:", item);

          return (
            <Text style={{ padding: 20, fontSize: 16 }}>
              {JSON.stringify(item)}
            </Text>
          );
        }}

        ListEmptyComponent={
          <Text style={styles.vacio}>
            Sin productos. ¡Agregá el primero! 😊
          </Text>
        }
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  vacio: { textAlign: "center", marginTop: 20, color: "#777" },
});