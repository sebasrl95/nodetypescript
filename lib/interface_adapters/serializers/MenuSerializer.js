'use strict';

const _serializeSingleMenu = (menu) => {
  return {
    'id': menu.id,
    'name': menu.name,
    'active': menu.active,
    'weight': menu.weight,
    'date': menu.date
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Se espera un valor diferente de nulo o undefined');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleMenu);
    }
    return _serializeSingleMenu(data);
  }

};