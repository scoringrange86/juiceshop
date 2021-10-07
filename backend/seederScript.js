//
//      Inserts products into DB
//

require('dotenv').config();

const productData = require('./data/products');
const Product = require('./models/product');
const connectDB = require('./config/db');

connectDB();

const importData = async () => {

    try{
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log('Data Import Success');

        process.exit();
    } catch (error)
    {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();