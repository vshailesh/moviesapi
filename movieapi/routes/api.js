const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const uri = require('./mongoURI');
const router = express.Router();

router.get('/', async (req, res, next)=>{
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const db = client.db('sample_mflix');
        const data = db.collection('comments');
        
        const filterData = await data.find({_id: new ObjectId("5a9427648b0beebeb6957a09")}).toArray();
        if(filterData)
        // console.log(filterData);
        res.status(200).json(filterData);
        
    } catch (error) {
        console.log(error);
        // res.status(404).send(error);
    }
});

module.exports = router