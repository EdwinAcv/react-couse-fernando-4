

export const Ejemplo = ({icono ,nombre, ejecutar }) => {
  return (
    <button
        onClick={ejecutar}
    > { nombre } </button>
  )
}
