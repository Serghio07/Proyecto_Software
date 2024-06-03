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
    const {nombre, descripcion, precio } = req.body;
    const response = await pool.query(
        'INSERT INTO comidas (nombre, descripcion, precio) VALUES ($1, $2, $3)',
        [nombre, descripcion, precio]
    );
    console.log(response);
    res.json({
        message: 'Comida Added Successfully',
        body: {
            comida: {nombre, descripcion, precio }
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
    const { nombre, descripcion, precio } = req.body;
    const response = await pool.query(
        'UPDATE comidas SET nombre = $2, descripcion = $3, precio = $4 WHERE id = $1',
        [id,nombre, descripcion, precio]
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
    const {mesaBol,nro_mesa } = req.body;
    const response = await pool.query('INSERT INTO reservas (mesaBol,nro_mesa) VALUES ($1, $2)', [mesaBol,nro_mesa]);
    console.log(response);
    res.json({
        message: 'Reserva Added Successfully',
        body: {
            reserva: { mesaBol,nro_mesa }
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
    const { mesaBol,nro_mesa } = req.body;
    const response = await pool.query('UPDATE reservas SET mesaBol = $2, nro_mesa = $3 WHERE id = $1', [id, mesaBol,nro_mesa]);
    console.log(response);
    res.json('Reserva updated successfully');
};

//ORDENES
const getOrdenes = async(req,res)=>{
    try{
        const response = await pool.query('SELECT * FROM ordenes');
        res.status(200).json.rows;
    }catch(error){
        console.log(error);
        res.send("Error: "+error)
    }
}
    
    const getOrdenesById = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM ordenes WHERE id = $1', [id]);
        res.json(response.rows);
    };
    
    const createOrdenes = async (req, res) => {
        const {fecha,total } = req.body;
        const response = await pool.query(
            'INSERT INTO ordenes (fecha, total) VALUES ($1, $2)',
            [fecha,total]
        );
        console.log(response);
        res.json({
            message: 'Orden Added Successfully',
            body: {
                ordenes: {fecha, total }
            }
        });
    };
    
    const deleteOrdenes = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM ordenes WHERE id = $1', [id]);
        console.log(response);
        res.json(`ordenes ${id} deleted successfully`);
    };
    
    const updateOrdenes = async (req, res) => {
        const id = req.params.id;
        const { fecha,total } = req.body;
        const response = await pool.query(
            'UPDATE ordenes SET fehca = $2, total = $3 WHERE id = $1',
            [id,fecha,total]
        );
        console.log(response);
        res.json('Orden updated successfully');
    };
//DETALLE DE ORDENES
const getDetalleOrdenes = async(req,res)=>{
    try{
        const response = await pool.query('SELECT * FROM detalle_ordenes');
        res.status(200).json.rows;
    }catch(error){
        console.log(error);
        res.send("Error: "+error)
    }
}
    
    const getDetalleOredenesById = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM detalle_ordenes WHERE id = $1', [id]);
        res.json(response.rows);
    };
    
    const createDetalleOrdenes = async (req, res) => {
        const { } = req.body;
        const response = await pool.query(
            'INSERT INTO ordenes () VALUES ($1, $2)',
            []
        );
        console.log(response);
        res.json({
            message: 'Orden Added Successfully',
            body: {
                detalle_ordenes: {}
            }
        });
    };
    
    const deleteDetalleOrdenes = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM detalle_ordenes WHERE id = $1', [id]);
        console.log(response);
        res.json(`detalle_ordenes ${id} deleted successfully`);
    };
    
    const updateDetalleOrdenes = async (req, res) => {
        const id = req.params.id;
        const {  } = req.body;
        const response = await pool.query(
            'UPDATE detalle_ordenes SET fehca = $2, total = $3 WHERE id = $1',
            [id]
        );
        console.log(response);
        res.json('Detalle Orden updated successfully');
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

    getOrdenes,
    updateOrdenes,
    createOrdenes,
    deleteOrdenes,
    getOrdenesById, 
    
    getDetalleOrdenes,
    getDetalleOredenesById,
    updateDetalleOrdenes,
    createDetalleOrdenes,
    deleteDetalleOrdenes,
}