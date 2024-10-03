const { OK, CREATED, SuccessResponse  } = require("../core/success.response")
const AccessService = require("../services/access.service")

/**
 * @example1
 * return res.status(201).json(await AccessService.signUp(req.body))
 *
 * @example2
 * // new CREATED({
 * //    message: 'Register OK!',
 * //    metadata: await AccessService.signUp(req.body),
 * //    option: 'abc'
 * //  }).send(res)
 */
// class AccessController {
//   signUp = async (req, res, next) => {
//     // 200 OK
//     // 201 CREATED
//     new CREATED({
//       message: 'Register OK!',
//       metadata: await AccessService.signUp(req.body),
//       option: 'abc'
//     }).send(res)
//   }
// }

// module.exports = new AccessController()

class AccessController {
  signUp = async (req, res, next) => {
    // 200 OK
    // 201 CREATED

  }
}

module.exports = new AccessController()
