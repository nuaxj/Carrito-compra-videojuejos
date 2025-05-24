import { useState, useEffect } from "react";
import { productos } from "./data";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const precioTotal = carrito.reduce((total, item) => total + item.precio, 0);
  const descuento = carrito.length >= 3 ? 0.1 * precioTotal : 0;
  const totalConDescuento = precioTotal - descuento;

  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <div>
      <h1>Carrito de Videojuegos</h1>
      <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Cart
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
        precioTotal={precioTotal}
        totalConDescuento={totalConDescuento}
      />
    </div>
  );
}

export default App;