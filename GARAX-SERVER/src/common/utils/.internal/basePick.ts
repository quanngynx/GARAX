import basePickBy from './basePickBy'
import hasIn from './hasIn'

/**
 * The base implementation of `pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object: object, paths: string[]): object {
  return basePickBy(object, paths, (_value: any, path: string) => hasIn(object, path))
}

export default basePick
