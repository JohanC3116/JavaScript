class Productos {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this._idproducto = ++Productos.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get idproducto() {
    return this._idproducto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }
  mostrarDatos() {
    return `idProducto: ${this._idproducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`;
  }
}
class Orden {
  static contadorOrdenes = 0;
  static get MaxProductos() {
    return 5;
  }
  constructor() {
    this._idorden = ++Orden.contadorOrdenes;
    this._productos = [];
  }
  get idOrden() {
    return this._idorden;
  }
  addProductos(producto) {
    if (this._productos.length < Orden.MaxProductos) {
      this._productos.push(producto);
    } else {
      console.log("No se puede agregar mas de 5 productos");
    }
  }
  calcularTotal() {
    let total = 0;
    for (let producto of this._productos) {
      total += producto.precio;
    }
    return total;
  }
  mostrarOrden() {
    let listaProductosAgregados = "";
    for (let producto of this._productos) {
      listaProductosAgregados += "\n{" + producto.mostrarDatos() + "}";
    }
    console.log(
      `Orden: ${this._idorden}, Total: $${this.calcularTotal()}, Productos: ${listaProductosAgregados}`,
    );
  }
}

let producto1 = new Productos("Cerveza", 20);
let producto2 = new Productos("Laptop", 32);
let producto3 = new Productos("Teclado", 44);

let order1 = new Orden();
order1.addProductos(producto1)
order1.addProductos(producto2)
order1.addProductos(producto3)
order1.mostrarOrden()