'use strict';

const ListMenus = require('../../application_business_rules/use_cases/ListMenus');
const MenuSerializer = require('../serializers/MenuSerializer');
const MenuRepositoryBussinness = require('../../application_business_rules/repositories/MenuRepository');
const MenuRepositoryStorage = require('../storage/MenuRepository');
const menuRepository = new MenuRepositoryBussinness(new MenuRepositoryStorage());

module.exports = {
  async list() {
    const menus = await ListMenus({ menuRepository });
    const menuSerializer = new MenuSerializer();
    return menus.map(menuSerializer.serialize);
  },
};
