const { Router} =  require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser, getRegister, getRegisterById, createRegister, deleteRegister, updateRegister, getDetalleOrdenes, getDetalleOredenesById, createDetalleOrdenes, deleteDetalleOrdenes, updateDetalleOrdenes, getOrdenes, getOrdenesById, createOrdenes, deleteOrdenes, updateOrdenes, getComidas, getComidaById, createComida, deleteComida, updateComida, getReservas, getReservaById, createReserva, deleteReserva, updateReserva, getOrdeneById, createOrdene, deleteOrdene, updateOrdene, getDetalleOredeneById, createDetalleOrdene, deleteDetalleOrdene, updateDetalleOrdene} = require('../controllers/index.controller');

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
router.get('/reservas',getReservas);
router.get('/reservas/:id',getReservaById);
router.post('/reservas',createReserva);
router.delete('/reservas/:id',deleteReserva);
router.put('/reservas/:id',updateReserva);

router.get('/oredenes',getOrdenes);
router.get('/ordenes/:id',getOrdeneById);
router.post('/ordenes',createOrdene);
router.delete('/ordenes/:id',deleteOrdene);
router.put('/ordenes/:id',updateOrdene);
router.get('/destalle_ordenes',getDetalleOrdenes);
router.get('/destalle_ordenes/:id',getDetalleOredeneById);
router.post('/destalle_ordenes',createDetalleOrdene);
router.delete('/destalle_ordenes/:id',deleteDetalleOrdene);
router.put('/destalle_ordenes/:id',updateDetalleOrdene);

module.exports = router;