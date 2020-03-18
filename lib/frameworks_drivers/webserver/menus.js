'use strict';

const MenuController = require('../../interface_adapters/controllers/MenuController');

module.exports = {
  name: 'menus',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/menus',
        handler: MenuController.list,
        options: {
          description: 'List all menus',
          tags: ['api'],
        },
      }
    ]);
  }
};