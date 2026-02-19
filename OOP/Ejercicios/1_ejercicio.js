class Usuario {
  constructor(idusuario, nombre, apellido, edad) {
    this._idusuario = idusuario;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get idusuario() {
    return this._idusuario;
  }
  set idusuario(idusuario) {
    this._idusuario = idusuario;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  mostrarDatos() {
    return `${this._idusuario} ${this._nombre} ${this._apellido} ${this._edad}`;
  }
  mostrarPoli() {
    return this.mostrarDatos();
  }
}
class Cliente extends Usuario {
  constructor(idusuario, nombre, apellido, edad, saldo, idcliente) {
    super(idusuario, nombre, apellido, edad);
    this._saldo = saldo;
    this._idcliente = idcliente;
  }
  get saldo() {
    return this._saldo;
  }
  set saldo(saldo) {
    this._saldo = saldo;
  }
  get idcliente() {
    return this._idcliente;
  }
  set idcliente(idcliente) {
    this._idcliente = idcliente;
  }
  mostrarDatos() {
    return `${super.mostrarDatos()} ${this._idcliente} ${this._saldo}`;
  }
  
}

class Proveedores extends Usuario {
  constructor(idusuario, nombre, apellido, edad, idproveedor, idfiscal) {
    super(idusuario, nombre, apellido, edad);
    this._idproveedor = idproveedor;
    this._idfiscal = idfiscal;
  }
  get() {
    return this._idproveedor;
  }
  set idproveedor(idproveedor) {
    this._idproveedor = idproveedor;
  }
  get() {
    return this._idfiscal;
  }
  set idfiscal(idfiscal) {
    this._idfiscal = idfiscal;
  }
  mostrarDatos() {
    return `${super.mostrarDatos()} ${this._idproveedor} ${this._idfiscal}`;
  }
}

const proveedor = new Proveedores(1, "Johan", "Calderon", 22, 5, 8);
console.log(proveedor.mostrarPoli());
const cliente = new Cliente(1, "Johan", "Calderon", 22, 5, 8);
console.log(cliente.mostrarPoli());
const usuario = new Usuario(1, "Camila", "Calderon", 17)
console.log(usuario.mostrarPoli())