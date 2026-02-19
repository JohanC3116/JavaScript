// class Persona {
//   constructor(name, lastame) {
//     this.name = name;
//     this.lastame = lastame;
//   }
//   obtenerDatos() {
//     return `${this.name} ${this.lastame}`;
//   }
//   poli() {
//     return this.obtenerDatos();
//   }
// }

// class Empleado extends Persona {
//   constructor(name, lastame, sueldo) {
//     super(name, lastame);
//     this.sueldo = sueldo;
//   }
//   obtenerDatos() {
//     return `${super.obtenerDatos()} ${this.sueldo}`;
//   }
// }
// class Ejecutivo extends Empleado {
//   constructor(name, lastame, sueldo, departamento) {
//     super(name, lastame, sueldo);
//     this.departamento = departamento;
//   }
//   obtenerDatos() {
//     return `${super.obtenerDatos()} ${this.departamento}`;
//   }
// }

// const persona = new Persona("Johan", "Calderon")
// console.log(persona.poli())

// const empleado = new Empleado("Johan", "Calderon", 50000);
// console.log(empleado.poli());

// const ejecutivo = new Ejecutivo("Johan", "Calderon", 50000, "Dept: 5");
// console.log(ejecutivo.poli());

class Animal {
  emitirSonido() {
    return console.log("Grr...");
  }
}
class Gato extends Animal {
  emitirSonido() {
    console.log("Meaw...");
  }
}
class Perro extends Animal {
  emitirSonido() {
    console.log("Woof...");
  }
}
const perro = new Perro();
perro.emitirSonido();
