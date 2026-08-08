import express from 'express';
import {schemeForm} from '../controllers/schemes.js'

const schemeRouter=express.Router();

schemeRouter.route('/form').post(schemeForm)

export default schemeRouter;