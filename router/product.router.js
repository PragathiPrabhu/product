const express = require('express');
const router=express.Router();
const TAFFY = require('taffy');


const productController=require("../controller/product.controller");

const productDetails = TAFFY([
	{"id":1,"name":"laptop","price":10000},
	{"id":2,"name":"Mouse","price":500},
	{"id":3,"name":"Keyboard","price":1000},
	{"id":4,"name":"Mobile","price":15000}	
]);

//Display all products
router.get('/', (req, res) => 
{ 
	const prod = productDetails().get();
	res.send({message:"success",prod});
});

//Display selected product based on id
router.get('/:id', (req, res) => 
{ 
	const id=parseInt(req.params.id)
	const prod = productDetails({id:id}).first();
	res.send({message:"success",prod});
});

//Display selected product based on id
router.get('/:id', (req, res) => 
{ 
	const id=parseInt(req.params.id)
	const prod = productDetails({id:id}).first();
	res.send({message:"success",prod});
});

//Delete product based on id
router.delete('/:id', (req, res) => 
{ 
	const id=parseInt(req.params.id)
	const prod_details = productDetails({id:id}).first();
	const prod = productDetails({id:id}).remove();
	res.send({message:"Product deleted Successfully",prod_details});
});

//Update product based on id
router.put('/:id/:name', (req, res) => 
{ 
	const id=parseInt(req.params.id)
	const name=req.params.name;
	productDetails({id:id}).update({name:name});
	const prod_details = productDetails({id:id}).first();
	res.send({message:"Product updated Successfully",prod_details});
});

//Add product
router.post('/', (req, res) => 
{ 
	console.log("data====="+parseInt(req.body.id));
	const id=parseInt(req.body.id);
	const name=req.body.name;
	const price=req.body.price;
	productDetails.insert({"id":id,"name":name,"price":price});
	const prod=productDetails().get();
	res.send({message:"Product updated Successfully",prod});
});



module.exports=router