import { useState } from "react";
import { Item } from "../types/Item";

export default function usarItemsDeCompra() {
  const [items, setItems] = useState<Item[]>([]);

  const agregarItem = (nombreNuevo: string) => {
    console.log("AGREGANDO:", nombreNuevo);
    const limpio = nombreNuevo.trim();
    if (!limpio) return;

    const nuevoObjeto: Item = {
      id: String(Date.now()),
      nombre: limpio,
      completado: false,
    };

    setItems((actuales) => {
      const nuevaLista = [...actuales, nuevoObjeto];
      console.log("Estado dentro del hook DESPUÉS del set:", nuevaLista.length);
      return nuevaLista;
    });
  };

  const cambiarItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, completado: !it.completado } : it,
      ),
    );
  };

  const eliminarItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return { items, agregarItem, cambiarItem, eliminarItem };
}
