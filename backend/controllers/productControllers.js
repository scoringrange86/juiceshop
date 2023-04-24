//
//      Accesses DB to return requested data
//

import Product from "../models/product.js";

export const getAllProducts = async (request, response) =>{

    try{
        const products = await Product.find({});
        // console.log("db products ", response.json(products));
        response.json(products);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

const getProductbyId = async (request, response) =>{

    try{
        const product = await Product.findById(request.params.id);

        response.json(product);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

export default getProductbyId 
