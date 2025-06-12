const precioUnitario = 150000;

let productos = ["Notebook", "Celular", "Televisión"]
let = nombreCliente = prompt("Ingrese su nombre")
function saludar(nombre) {
    alert("Hola " +  nombre + " Bienvenido al simulador!.");
}

saludar (nombreCliente)

function elegirProducto () {
    let mensaje = "Productos disponibles:";
    for (let i = 0; i<productos.length; ++i) {
        mensaje += (i + 1) + "." + productos [i] + "";
    } 

    let opcion = prompt(mensaje + " Ingrese el numero del producto:");
    return productos [opcion -1];
}

let productoElegido = elegirProducto();

function calcularPrecio (cantidad, precio) {
    return cantidad * precio;
}

let cantidad = parseInt(prompt("¿Cuantas unidades de " + productoElegido + " desea comprar?"))
let total   = calcularPrecio (cantidad, precioUnitario);

alert ("Resumen de compra: " +
      "Cliente: " + nombreCliente + "" +
      "Producto: " + productoElegido + "" +
      "Cantidad: " + cantidad + "" +
      "Precio total: $" + total);


