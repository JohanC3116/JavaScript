//Set = Asignar Valor
//Get = (Retornar algo)
class Person {
  constructor(name, lastname) {
    this._name = name;
    this._lastname = lastname;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}
const persona = new Person("Johan", "Calderon");
persona.name = "Carlos";
console.log(persona.name);
