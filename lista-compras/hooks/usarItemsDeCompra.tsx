import { useState } from "react";
import { Item } from "../types/Item";

export default function usarItemsDeCompra() {
  const [items, setItems] = useState<Item[]>([]);

  const agregarItem = (nombreNuevo: string) => {
    const nombreLimpio = nombreNuevo.trim();
    if (!nombreLimpio) return;

    setItems((actuales) => [
      ...actuales,
      {
        id: `${Date.now()}-${Math.random()}`,
        nombre: nombreLimpio,
        completado: false,
      },
    ]);
  };

  const cambiarItem = (id: string) => {
    setItems((actuales) =>
      actuales.map((item) =>
        item.id === id ? { ...item, completado: !item.completado } : item,
      ),
    );
  };

  const eliminarItem = (id: string) => {
    setItems((actuales) => actuales.filter((item) => item.id !== id));
  };

  return {
    items,
    agregarItem,
    cambiarItem,
    eliminarItem,
  };
}