const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL|| 'postgres://postgres:nimda@localhost:5433/Usuarios',
    ssl: process.env.DATABASE_URL ? true : false
})



const getUsers = async (req,res)=>{
    try
    {
        const response = await pool.query('SELECT * FROM usuarios');
        res.status(200).json(response.rows);
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};


const getUserById = async(req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1',[id]);
    res.json(response.rows);
};

const createUser = async (req,res)=>{
    const {nombre, correo, contrasena, tipo, contador} = req.body;
    const response = await pool.query('INSERT INTO usuarios(nombre, correo, contrasena, tipo, contador) VALUES($1, $2, $3, $4, $5)',[nombre, correo, contrasena, tipo, contador]);
    console.log(response);
    res.json({
        message: 'User Added Successfully',
        body:{
            user:{nombre, correo, contrasena, tipo, contador}
        }
    });
};


const deleteUser = async(req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuarios WHERE id = $1',[id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};

const updateUser = async(req,res) => {
    const id = req.params.id;
    const {nombre, correo, contrasena, tipo, contador} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre =$2, correo =$3, contrasena =$4, tipo =$5, contador =$6 WHERE id = $1',[id,nombre, correo, contrasena, tipo, contador]);
    console.log(response);
    res.json('User updated successfully');
};

const getRegister = async (req,res)=>{
    try
    {
        const response = await pool.query('SELECT * FROM registrosactividad');
        res.status(200).json(response.rows);
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};


const getRegisterById = async(req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM registrosactividad WHERE id = $1',[id]);
    res.json(response.rows);
};

const createRegister = async (req,res)=>{
    const {id_usuario, fecha_registro} = req.body;
    const response = await pool.query('INSERT INTO registrosactividad(id_usuario, fecha_registro) VALUES($1, $2)',[id_usuario, fecha_registro]);
    console.log(response);
    res.json({
        message: 'User Added Successfully',
        body:{
            user:{id_usuario, fecha_registro}
        }
    });
};


const deleteRegister = async(req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM registrosactividad WHERE id = $1',[id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};

const updateRegister = async(req,res) => {
    const id = req.params.id;
    const {id_usuario, fecha_registro} = req.body;
    const response = await pool.query('UPDATE registrosactividad SET id_usuario =$2, fecha_registro =$3 WHERE id = $1',[id,id_usuario, fecha_registro]);
    console.log(response);
    res.json('User updated successfully');
};

//COMIDAS

const getComidas = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM comidas');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.send("Error: " + error);
    }
};

const getComidaById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM comidas WHERE id = $1', [id]);
    res.json(response.rows);
};

const createComida = async (req, res) => {
    const { foto_comida, nombre, descripcion, precio } = req.body;
    const response = await pool.query(
        'INSERT INTO comidas (foto_comida, nombre, descripcion, precio) VALUES ($1, $2, $3, $4)',
        [foto_comida, nombre, descripcion, precio]
    );
    console.log(response);
    res.json({
        message: 'Comida Added Successfully',
        body: {
            comida: { foto_comida, nombre, descripcion, precio }
        }
    });
};

const deleteComida = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM comidas WHERE id = $1', [id]);
    console.log(response);
    res.json(`Comida ${id} deleted successfully`);
};

const updateComida = async (req, res) => {
    const id = req.params.id;
    const { foto_comida, nombre, descripcion, precio } = req.body;
    const response = await pool.query(
        'UPDATE comidas SET foto_comida = $2, nombre = $3, descripcion = $4, precio = $5 WHERE id = $1',
        [id, foto_comida, nombre, descripcion, precio]
    );
    console.log(response);
    res.json('Comida updated successfully');
};

//RESERVAS

const getReservas = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM reservas');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.send("Error: " + error);
    }
};

const getReservaById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM reservas WHERE id = $1', [id]);
    res.json(response.rows);
};

const createReserva = async (req, res) => {
    const { nombre_cliente, telefono, fecha_compromiso, descripcion } = req.body;
    const response = await pool.query('INSERT INTO reservas (nombre_cliente, telefono, fecha_compromiso, descripcion) VALUES ($1, $2, $3, $4)', [nombre_cliente, telefono, fecha_compromiso, descripcion]);
    console.log(response);
    res.json({
        message: 'Reserva Added Successfully',
        body: {
            reserva: { nombre_cliente, telefono, fecha_compromiso, descripcion }
        }
    });
};

const deleteReserva = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM reservas WHERE id = $1', [id]);
    console.log(response);
    res.json(`Reserva ${id} deleted successfully`);
};

const updateReserva = async (req, res) => {
    const id = req.params.id;
    const { nombre_cliente, telefono, fecha_compromiso, descripcion } = req.body;
    const response = await pool.query('UPDATE reservas SET nombre_cliente = $2, telefono = $3, fecha_compromiso = $4, descripcion = $5 WHERE id = $1', [id, nombre_cliente, telefono, fecha_compromiso, descripcion]);
    console.log(response);
    res.json('Reserva updated successfully');
};


//ORDENES

const getOrders = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ordenes');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.send("Error: " + error);
    }
};

const getOrderById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM ordenes WHERE id = $1', [id]);
    res.json(response.rows);
};

const createOrder = async (req, res) => {
    const { fecha, total, usuario_id, entrega } = req.body;
    const response = await pool.query(
        'INSERT INTO ordenes (fecha, total, usuario_id, entrega) VALUES ($1, $2, $3, $4)',
        [fecha, total, usuario_id, entrega]
    );
    console.log(response);
    res.json({
        message: 'Order Added Successfully',
        body: {
            order: { fecha, total, usuario_id, entrega }
        }
    });
};

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM ordenes WHERE id = $1', [id]);
    console.log(response);
    res.json(`Order ${id} deleted successfully`);
};

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const { fecha, total, usuario_id, entrega } = req.body;
    const response = await pool.query(
        'UPDATE ordenes SET fecha = $2, total = $3, usuario_id = $4, entrega = $5 WHERE id = $1',
        [id, fecha, total, usuario_id, entrega]
    );
    console.log(response);
    res.json('Order updated successfully');
};

// RESERVA_COMIDA
const getReservaComidas = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM reserva_comida');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.send("Error: " + error);
    }
};

const getReservaComidaById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM reserva_comida WHERE id = $1', [id]);
    res.json(response.rows);
};

const createReservaComida = async (req, res) => {
    const { comida_id, reserva_id } = req.body;
    const response = await pool.query(
        'INSERT INTO reserva_comida (comida_id, reserva_id) VALUES ($1, $2)',
        [comida_id, reserva_id]
    );
    console.log(response);
    res.json({
        message: 'Reserva Comida Added Successfully',
        body: {
            reserva_comida: { comida_id, reserva_id }
        }
    });
};

const deleteReservaComida = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM reserva_comida WHERE id = $1', [id]);
    console.log(response);
    res.json(`Reserva Comida ${id} deleted successfully`);
};

const updateReservaComida = async (req, res) => {
    const id = req.params.id;
    const { comida_id, reserva_id } = req.body;
    const response = await pool.query(
        'UPDATE reserva_comida SET comida_id = $2, reserva_id = $3 WHERE id = $1',
        [id, comida_id, reserva_id]
    );
    console.log(response);
    res.json('Reserva Comida updated successfully');
};

// comida_ingrediente
const getComidaIngredientes = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM comidaIngrediente');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.send("Error: " + error);
    }
};

const getComidaIngredienteById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM comidaIngrediente WHERE id = $1', [id]);
    res.json(response.rows);
};

const createComidaIngrediente = async (req, res) => {
    const { descripcion, ingrediente_id, comidas_id } = req.body;
    const response = await pool.query(
        'INSERT INTO comidaIngrediente (descripcion, ingrediente_id, comidas_id) VALUES ($1, $2, $3)',
        [descripcion, ingrediente_id, comidas_id]
    );
    console.log(response);
    res.json({
        message: 'Comida Ingrediente Added Successfully',
        body: {
            comidaIngrediente: { descripcion, ingrediente_id, comidas_id }
        }
    });
};

const deleteComidaIngrediente = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM comidaIngrediente WHERE id = $1', [id]);
    console.log(response);
    res.json(`Comida Ingrediente ${id} deleted successfully`);
};

const updateComidaIngrediente = async (req, res) => {
    const id = req.params.id;
    const { descripcion, ingrediente_id, comidas_id } = req.body;
    const response = await pool.query(
        'UPDATE comidaIngrediente SET descripcion = $2, ingrediente_id = $3, comidas_id = $4 WHERE id = $1',
        [id, descripcion, ingrediente_id, comidas_id]
    );
    console.log(response);
    res.json('Comida Ingrediente updated successfully');
};

// ingredientes

const getIngredientes = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ingredientes');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.send("Error: " + error);
    }
};

const getIngredienteById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM ingredientes WHERE id = $1', [id]);
    res.json(response.rows);
};

const createIngrediente = async (req, res) => {
    const { tipo, nombre } = req.body;
    const response = await pool.query(
        'INSERT INTO ingredientes (tipo, nombre) VALUES ($1, $2)',
        [tipo, nombre]
    );
    console.log(response);
    res.json({
        message: 'Ingrediente Added Successfully',
        body: {
            ingrediente: { tipo, nombre }
        }
    });
};

const deleteIngrediente = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM ingredientes WHERE id = $1', [id]);
    console.log(response);
    res.json(`Ingrediente ${id} deleted successfully`);
};

const updateIngrediente = async (req, res) => {
    const id = req.params.id;
    const { tipo, nombre } = req.body;
    const response = await pool.query(
        'UPDATE ingredientes SET tipo = $2, nombre = $3 WHERE id = $1',
        [id, tipo, nombre]
    );
    console.log(response);
    res.json('Ingrediente updated successfully');
};





module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    getRegister,
    getRegisterById,
    createRegister,
    deleteRegister,
    updateRegister,

    getComidas,
    getComidaById,
    createComida,
    deleteComida,
    updateComida,

    getReservas,
    getReservaById,
    createReserva,
    deleteReserva,
    updateReserva,

    getOrders,
    getOrderById,
    createOrder,
    deleteOrder,
    updateOrder,

    getReservaComidas,
    getReservaComidaById,
    createReservaComida,
    deleteReservaComida,
    updateReservaComida,

    getComidaIngredientes,
    getComidaIngredienteById,
    createComidaIngrediente,
    deleteComidaIngrediente,
    updateComidaIngrediente,

    getIngredientes,
    getIngredienteById,
    createIngrediente,
    deleteIngrediente,
    updateIngrediente,
}