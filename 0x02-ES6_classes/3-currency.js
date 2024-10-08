export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._value = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
