const ProductList = ({ productos, agregarAlCarrito }) => {
  return (
    <div>
      <h2>Productos</h2>
      <ul className="producto-lista">
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;