// import pick from './.internal/pick';
import _ from 'lodash';

// _.pick
/**
 * @example
 * const _ = require('lodash')

   const getInfoData = ({ fields = [], object = {} }) => {
       return _.pick( object, fields)
   }
 */
// export const getInfoData = ({ fields = [], object = {} }) => {
//     return pick( object, fields )
// }


export const getInfoData = ({ fields = [], object = {} }) => {
  return _.pick( object, fields)
}

