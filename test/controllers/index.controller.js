const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL|| 'postgres://postgres:admin@localhost:5432/Usuarios',
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
}