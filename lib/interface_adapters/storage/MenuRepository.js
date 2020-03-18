'use strict';

const mysql = require('../../frameworks_drivers/database/mysql');
const util = require('util');
const MenuModel = require('../../frameworks_drivers/database/models/Menu');
const query = util.promisify(mysql.query).bind(mysql);

module.exports = class {

  constructor() {
    this.db = mysql;
    this.model = MenuModel;
  }

  async list() {
    const menus = await query('SELECT * FROM tbl_menu');
    if (menus) {
      return menus;
    }

    return null;
  }

  async persist(MenuEntity) {
    //const { name, active, weight, date } = MenuEntity;
    const mysqlUser = await this.db.query('INSERT INTO games set ?', [MenuEntity]);

    if (mysqlUser) {
      return true;
    }

    return false;
  }

  async merge(userEntity) {
    const seqUser = await this.model.findByPk(userEntity.id);

    if (!seqUser) return false;

    const { firstName, lastName, email, password } = userEntity;
    await seqUser.update({ firstName, lastName, email, password });

    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
  }

};