const { Router} =  require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser, getRegister, getRegisterById, createRegister, deleteRegister, updateRegister} = require('../controllers/index.controller');

router.get('/users',getUsers);
router.get('/users/:id',getUserById);
router.post('/users',createUser);
router.delete('/users/:id',deleteUser);
router.put('/users/:id',updateUser);
router.get('/regis',getRegister);
router.get('/regis/:id',getRegisterById);
router.post('/regis',createRegister);
router.delete('/regis/:id',deleteRegister);
router.put('/regis/:id',updateRegister);

module.exports = router;