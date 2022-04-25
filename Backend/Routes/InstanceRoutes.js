const express = require('express');
const router = express.Router();
const {getInstance} = require('../Services/EC2Service/getInstance')
const {stopInstance} = require('../Services/EC2Service/stopInstance')
const {startInstance} = require('../Services/EC2Service/startInstance')
const {terminateInstance} = require('../Services/EC2Service/terminateInstance')
const {createInstance} = require('../Services/EC2Service/createInstance');

router.get('/',(req,res) => {
    res.send('<h1>Instances</h1>')
})

router.get('/get', async (req,res) => {
    const data =  await getInstance();
    res.send(data)
})

router.post('/stop', async (req,res) => {
    const stoppedInstance = await stopInstance(req.body) 
    res.send(stoppedInstance)
})

router.post('/start',async (req,res) => {
    const startedInstance = await startInstance(req.body) 
    res.send(startedInstance)
})

router.post('/terminate',async (req,res) => {
    const terminatedInstance = await terminateInstance(req.body) 
    res.send(terminatedInstance)
})

router.post('/create', async (req,res) => {
    const newInstance = await createInstance(req.body) 
    res.send(newInstance)
})

module.exports = router;