const Cart = ({ carrito, eliminarDelCarrito, precioTotal, totalConDescuento }) => {
  const manejarCompra = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío. ¡Agrega productos antes de comprar!");
    } else {
      alert("¡Compra realizada con éxito! Disfruta de tus videojuegos.");
    }
  };

  return (
    <div>
      <h2>Carrito</h2>
      <ul className="carrito-lista">
        {carrito.map((item, index) => (
          <li key={index}>
            {item.nombre} - ${item.precio}
            <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${precioTotal}</h3>
      <h3>Total con descuento: ${totalConDescuento.toFixed(2)}</h3>
      <button onClick={manejarCompra}>Comprar</button>
    </div>
  );
};

export default Cart;