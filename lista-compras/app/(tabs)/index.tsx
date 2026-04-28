import React from "react";

import Contenedor from "../../componentes/Contenedor";
import TituloDeLaPagina from "../../componentes/TituloDeLaPagina";
import FormularioParaItemNuevo from "../../componentes/FormularioParaItemNuevo";
import ListaDeCompras from "../../componentes/ListaDeCompras";
import usarItemsDeCompra from "./hooks/usarItemsDeCompra";

export default function App() {
  const { items, eliminarItem, cambiarItem, agregarItem } = usarItemsDeCompra();

  return (
    <Contenedor>
      {}
      <TituloDeLaPagina />

      {}
      <ListaDeCompras
        items={items}
        alPresionarSobreUnItem={cambiarItem}
        alMantenerPresionSobreUnItem={eliminarItem}
      />

      {}
      <FormularioParaItemNuevo alCompletarFormulario={agregarItem} />
    </Contenedor>
  );
}
