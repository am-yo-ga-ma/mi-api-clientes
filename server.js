const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let clientes = [
  {
    id: "1",
    nombre: "Ana",
    apellido: "García",
    telefono: "555-0101",
    edad: "28",
    direccion: "Av. Principal 123",
    correo: "ana@email.com"
  }
];

// Obtener todos los clientes
app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

// Crear nuevo cliente
app.post('/api/clientes', (req, res) => {
  const { nombre, apellido, telefono, edad, direccion, correo } = req.body;
  
  const nuevoCliente = {
    id: Math.random().toString(36).substr(2, 9),
    nombre,
    apellido,
    telefono,
    edad, 
    direccion,
    correo
  };
  
  clientes.push(nuevoCliente);
  res.status(201).json(nuevoCliente);
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: '✅ ¡Mi API de clientes está funcionando!',
    instrucciones: 'Usa /api/clientes para gestionar clientes'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});