'use strict';

module.exports = class {
  
  constructor(repository) {
    this.repository = repository;
  }

  list() {
    return this.repository.list();
  }

  persist(menuEntity) {
    return this.repository.persist(menuEntity);
  }

};