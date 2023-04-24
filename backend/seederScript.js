//
//      Inserts products into DB
//

// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

import products from './data/products.js';
// import { deleteMany, insertMany } from './models/product.js';
import connectDB from './config/db.js';

import Product from './models/product.js';


connectDB();

// const importData = async () => {

//     try{
//         await deleteMany({});

//         await insertMany(productData);

//         console.log('Data Import Success');

//         process.exit();
//     } catch (error)
//     {
//         console.error("Error with data import");
//         process.exit(1);
//     }
// };

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log("Data Import Success");

        process.exit();
    }
    catch (error) {
        console.error("Error with data import")
        process.exit(1);
    }
}

importData();