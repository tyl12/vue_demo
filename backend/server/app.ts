import express from "express"
import cors from 'cors'
import bodyParser from 'body-parser'
import {router} from './router'

let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use(router)

import * as user from './API/user'
app.listen(9191, () =>{
    // user.test()
    console.log("server started")
})