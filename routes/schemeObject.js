import express, { Router } from 'express';
import { getS1,getS2,getS3,getS4,getS5,getS6,getS7,getS8,getS9 } from '../controllers/bTech.js';
import { getS1Mba,getS2Mba,getS3Mba,getS4Mba,getS5Mba,getS6Mba,getS7Mba,getS8Mba } from '../controllers/mbaSchemeObj.js';

let schemeObjectsRouter=express.Router();

schemeObjectsRouter.route('/1').get(getS1);
schemeObjectsRouter.route('/2').get(getS2);
schemeObjectsRouter.route('/3').get(getS3);
schemeObjectsRouter.route('/4').get(getS4);
schemeObjectsRouter.route('/5').get(getS5);
schemeObjectsRouter.route('/6').get(getS6);
schemeObjectsRouter.route('/7').get(getS7);
schemeObjectsRouter.route('/8').get(getS8);
schemeObjectsRouter.route('/9').get(getS9);

// mba above 9 
schemeObjectsRouter.route('/10').get(getS1Mba);
schemeObjectsRouter.route('/11').get(getS2Mba);
schemeObjectsRouter.route('/12').get(getS3Mba);
schemeObjectsRouter.route('/13').get(getS4Mba);
schemeObjectsRouter.route('/14').get(getS5Mba);
schemeObjectsRouter.route('/15').get(getS6Mba);
schemeObjectsRouter.route('/16').get(getS7Mba);
schemeObjectsRouter.route('/17').get(getS8Mba);

export default schemeObjectsRouter;

