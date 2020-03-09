

export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.stoned = false;
    this.attack = 100;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(val) {
    if (val === true) {
      this._stoned = true;
    }
  }

  get attack() {
    let attack = (this._attack - 10 * (this.distance - 1));

    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(attack);
  }

  set attack(prop) {
    this._attack = prop;
    return this.attack;
  }
}
