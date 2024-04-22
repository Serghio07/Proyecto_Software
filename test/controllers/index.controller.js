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
    const {nombre, correo, contrasena} = req.body;
    const response = await pool.query('INSERT INTO usuarios(nombre, correo, contrasena) VALUES($1, $2, $3)',[nombre, correo, contrasena]);
    console.log(response);
    res.json({
        message: 'User Added Successfully',
        body:{
            user:{nombre, correo, contrasena}
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
    const {nombre, correo, contrasena} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre =$2, correo =$3, contrasena =$4 WHERE id = $1',[id,nombre, correo, contrasena]);
    console.log(response);
    res.json('User updated successfully');
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
}