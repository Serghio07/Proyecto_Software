const { Router} =  require('express');
const router = Router();

const { getOrderDetails, getUsers, createUser, getUserById, deleteUser, updateUser, getRegister, getRegisterById, createRegister, deleteRegister, updateRegister, getDetalleOrdenes, getDetalleOredenesById, createDetalleOrdenes, deleteDetalleOrdenes, updateDetalleOrdenes, getOrdenes, getOrdenesById, createOrdenes, deleteOrdenes, updateOrdenes, getComidas, getComidaById, createComida, deleteComida, updateComida, getReservas, getReservaById, createReserva, deleteReserva, updateReserva, getOrdeneById, createOrdene, deleteOrdene, updateOrdene, getDetalleOredeneById, createDetalleOrdene, deleteDetalleOrdene, updateDetalleOrdene, getReservaComidas, getReservaComidaById, createReservaComida, deleteReservaComida, updateReservaComida, getComidaIngredientes, getComidaIngredienteById, createComidaIngrediente, deleteComidaIngrediente, updateComidaIngrediente, getIngredientes, getIngredienteById, createIngrediente, deleteIngrediente, updateIngrediente} = require('../controllers/index.controller');

router.get('/order-details', getOrderDetails);
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

router.get('/ordenes',getOrdenes);
router.get('/ordenes/:id',getOrdeneById);
router.post('/ordenes',createOrdene);
router.delete('/ordenes/:id',deleteOrdene);
router.put('/ordenes/:id',updateOrdene);
router.get('/destalle_ordenes',getDetalleOrdenes);
router.get('/destalle_ordenes/:id',getDetalleOredeneById);
router.post('/destalle_ordenes',createDetalleOrdene);
router.delete('/destalle_ordenes/:id',deleteDetalleOrdene);
router.put('/destalle_ordenes/:id',updateDetalleOrdene);

router.get('/reserva_comidas', getReservaComidas);
router.get('/reserva_comidas/:id', getReservaComidaById);
router.post('/reserva_comidas', createReservaComida);
router.delete('/reserva_comidas/:id', deleteReservaComida);
router.put('/reserva_comidas/:id', updateReservaComida);

router.get('/comida_ingredientes', getComidaIngredientes);
router.get('/comida_ingredientes/:id', getComidaIngredienteById);
router.post('/comida_ingredientes', createComidaIngrediente);
router.delete('/comida_ingredientes/:id', deleteComidaIngrediente);
router.put('/comida_ingredientes/:id', updateComidaIngrediente);

router.get('/ingredientes', getIngredientes);
router.get('/ingredientes/:id', getIngredienteById);
router.post('/ingredientes', createIngrediente);
router.delete('/ingredientes/:id', deleteIngrediente);
router.put('/ingredientes/:id', updateIngrediente);

module.exports = router;