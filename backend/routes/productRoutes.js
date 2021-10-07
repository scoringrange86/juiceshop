//
//      Makes requests to the db 
//

import { Router } from 'express';
const router = Router();

import  getProductbyId, {getAllProducts} from '../controllers/productControllers.js';
// import   getProductbyId  from '../controllers/productControllers.js';

//@desc     GET all product from db
//@route    GET /api/products
//@access   Public
router.get('/',getAllProducts)

//@desc     GET a product by id from db
//@route    GET /api/products/:id
//@access   Public
router.get('/:id', getProductbyId)

export default router; 