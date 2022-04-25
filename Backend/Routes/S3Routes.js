const express = require('express');
const router = express.Router();
const {getBuckets} = require('../Services/S3Service/getBuckets')
const {createBucket} = require('../Services/S3Service/createBucket')
const {deleteBucket} = require('../Services/S3Service/deleteBucket')

router.get('/',(req,res) => {
    res.send('<h1>Buckets</h1>')
})

router.get('/get', async (req,res) => {
    const data =  await getBuckets();
    res.send(data)
})

router.post('/create', async (req,res) => {
    const resdata = await createBucket(req.body)
    res.send(resdata)
})

router.post('/delete', async (req,res) => {
    const data =  await deleteBucket(req.body);
    res.send(data)
})


module.exports = router;