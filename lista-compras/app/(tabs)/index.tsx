import React from "react";
import Contenedor from "../../componentes/Contenedor";
import TituloDeLaPagina from "../../componentes/TituloDeLaPagina";
import FormularioParaItemNuevo from "../../componentes/FormularioParaItemNuevo";
import ListaDeCompras from "../../componentes/ListaDeCompras";
import useItemsDeCompra from "../../hooks/useItemsDeCompra";

export default function ListaDeComprasScreen() {
  const { items, agregarItem, cambiarItem, eliminarItem } = useItemsDeCompra();

  return (
    <Contenedor>
      <TituloDeLaPagina />
      <FormularioParaItemNuevo alCompletarFormulario={agregarItem} />
      <ListaDeCompras
        items={items}
        alPresionarItem={cambiarItem}
        alEliminarItem={eliminarItem}
      />
    </Contenedor>
  );
}
