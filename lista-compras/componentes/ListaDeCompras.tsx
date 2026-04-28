import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import ItemIndividual from '../app/(tabs)/hooks/usarItemsDeCompra';

type Props = {
  items: any[];
  alPresionarSobreUnItem: (id: string) => void;
  alMantenerPresionSobreUnItem: (id: string) => void;
};

export default function ListaDeCompras({ items, alPresionarSobreUnItem, alMantenerPresionSobreUnItem }: Props) {
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => (
        <ItemIndividual
          item={item}
          alPresionar={() => alPresionarSobreUnItem(item.id)}
          alMantenerPresion={() => alMantenerPresionSobreUnItem(item.id)}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.divisor} />}
      ListEmptyComponent={<Text style={styles.vacio}>Sin productos. ¡Agregá el primero! 😊</Text>}
    />
  );
}

const styles = StyleSheet.create({
  divisor: { height: 1, backgroundColor: '#eee' },
  vacio: { textAlign: 'center', color: '#777', marginTop: 24 },
});