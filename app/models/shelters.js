// *********************************************************************************
// Shelter.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection')

// []create and implement findWhere() method to get a simple record from database
// []create and implement update() to update a single record on database

/**
 * Queries the Shelter database
 *
 * @class Shelter
 */
class Shelter {
  constructor (table = 'shelter_tb') {
    this.table = table
  }

  /**
   *
   * Find all Examples in the table
   * @returns Promise
   * @memberof Shelter
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  /**
 * create a new record
 *
 * @param {Object} values The values to insert in the form of {column: value}
 * @returns Promise
 * @memberof Shelter
 */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Shelter
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
  /**
   * update a specific todo
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @param {Object} values The values to update in the form of {column: value}
   * @returns Promise
   * @memberof Shelter
   */
  update (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }

  /**
   * Finds 1 or more todos based on search criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Shelter
   */
  find (where) {
    return knex(this.table)
    .select('id', 'name', 'password')
    .where(where)
  }

  /**
   * Warning this drops and recreates table
   *
   * @returns Promise
   * @memberof Shelter
  */
  reset () {
    console.log('Reseted')
    return knex(this.table).truncate()
  }
}

module.exports = new Shelter()
