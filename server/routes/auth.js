import express from 'express'
const router = express.Router()

import {signUp, signIn, accountActivation} from '../controllers/auth'

const {userSignupValidator, userSignInValidator} = require('../validators/auth')
const {runValidation} = require('../validators')

router.post('/signup', userSignupValidator, runValidation, signUp)

router.post('/signin', userSignInValidator, runValidation, signIn)

router.post('/account-activation', accountActivation)

export default router
