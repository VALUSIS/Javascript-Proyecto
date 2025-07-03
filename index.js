const precioUnitario = 150000;
let carrito = []; 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCompra");
  const resultado = document.getElementById("resultado");


  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarUltimaCompra(carrito[carrito.length - 1]);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad <= 0) {
      resultado.innerHTML = "<p class='text-danger'>Por favor, ingresá una cantidad válida.</p>";
      return;
    }

    const total = cantidad * precioUnitario;

    const compra = { nombre, producto, cantidad, total };

    carrito.push(compra);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarUltimaCompra(compra);
  });

  function mostrarUltimaCompra(compra) {
    resultado.innerHTML = `
      <h3>Resumen de compra</h3>
      <p><strong>Cliente:</strong> ${compra.nombre}</p>
      <p><strong>Producto:</strong> ${compra.producto}</p>
      <p><strong>Cantidad:</strong> ${compra.cantidad}</p>
      <p><strong>Total:</strong> $${compra.total}</p>
    `;
  }
});