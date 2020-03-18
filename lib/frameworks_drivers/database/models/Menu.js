'use strict';

module.exports = class Menu {

  constructor(id = null, name, active, weight, date) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.weight = weight;
    this.date = date;
  }

};