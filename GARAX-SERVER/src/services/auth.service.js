require('dotenv').config()
const crypto = require('node:crypto');
const bcrypt = require('bcrypt')

// depenc...
const { DoiTac } = require('../models/partner.model')
const { Account } = require('../models/account.model')

const { BadRequestError, ForbidenError, AuthFailureError } = require('../middlewares/error.response')

const UserService = require('./account.service')
const PartnerService = require('./partner.service')
const KeyTokenService = require('./keyToken.service')

const { getInfoData } = require('../utils/')
const { createTokenPair , getAccessToken, getUserProfile } = require('./auth/utils');
