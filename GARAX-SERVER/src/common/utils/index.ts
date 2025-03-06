// import pick from './.internal/pick'

// _.pick
/**
 * @example
 * const _ = require('lodash')

   const getInfoData = ({ fields = [], object = {} }) => {
       return _.pick( object, fields)
   }
 */

   import { pick } from 'lodash'

   const getInfoData = ({ fields = [], object = {} }) => {
       return pick( object, fields)
   }

   // const getInfoData = ({ fields = [], object = {} }) => {
   //     return pick( object, fields )
   // }

   export default {
     getInfoData
   }

export * from './httpStatusCode';
