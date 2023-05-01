import express = require('express')
import * as user from './API/user'

export let router = express.Router()

router.get('/user', user.get)

