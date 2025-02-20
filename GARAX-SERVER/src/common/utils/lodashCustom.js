'use strict'

import pick from './.internal/pick'

// _.pick
/**
 * @example
 * const _ = require('lodash')

   const getInfoData = ({ fields = [], object = {} }) => {
       return _.pick( object, fields)
   }
 */
const getInfoData = ({ fields = [], object = {} }) => {
    return pick( object, fields )
}

module.exports = {
  getInfoData,
}
