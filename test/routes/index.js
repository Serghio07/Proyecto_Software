const { Router} =  require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser, getRegister, getRegisterById, createRegister, deleteRegister, updateRegister, getDetalleOrdenes, getDetalleOredenesById, createDetalleOrdenes, deleteDetalleOrdenes, updateDetalleOrdenes, getOrdenes, getOrdenesById, createOrdenes, deleteOrdenes, updateOrdenes, getComidas, getComidaById, createComida, deleteComida, updateComida} = require('../controllers/index.controller');

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


router.get('/comidas',getComidas);
router.get('/comidas/:id',getComidaById);
router.post('/comidas',createComida);
router.delete('/comidas/:id',deleteComida);
router.put('/comidas/:id',updateComida);
router.get('/reservas',getRegister);
router.get('/reservas/:id',getRegisterById);
router.post('/reservas',createRegister);
router.delete('/reservas/:id',deleteRegister);
router.put('/reservas/:id',updateRegister);

router.get('/oredenes',getOrdenes);
router.get('/ordenes/:id',getOrdenesById);
router.post('/ordenes',createOrdenes);
router.delete('/ordenes/:id',deleteOrdenes);
router.put('/ordenes/:id',updateOrdenes);
router.get('/destalle_ordenes',getDetalleOrdenes);
router.get('/destalle_ordenes/:id',getDetalleOredenesById);
router.post('/destalle_ordenes',createDetalleOrdenes);
router.delete('/destalle_ordenes/:id',deleteDetalleOrdenes);
router.put('/destalle_ordenes/:id',updateDetalleOrdenes);

module.exports = router;