/** Cách dùng
 * @example
 * router.post('/auth/signup', asyncHandler(accessController.signUp))
 */
const asyncHandler = func => {
  return (req, res, next) => {
    func(req, res, next).catch(next)
  }
}

module.exports = asyncHandler
