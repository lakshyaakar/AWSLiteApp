const express = require('express');
const router = express.Router();
const {getUsers} = require('../Services/IAMService/getUsers')
// const {deleteUser} = require('../Services/IAMService/deleteUser')
const {createUser} = require('../Services/IAMService/createUser')

router.get('/',(req,res) => {
    res.send('<h1>Users</h1>')
})

router.get('/get', async (req,res) => {
    const data =  await getUsers();
    res.send(data)
})

// router.get('/delete', async (req,res) => {
//     const data =  await deleteUser();
//     res.send(data)
// })

router.post('/create', async (req,res) => {
    const data =  await createUser(req.body);
    res.send(data)
})

module.exports = router;