const express = require('express');
const cors = require('cors');
const app = express();

// Permitir que Unity se conecte sin problemas de seguridad
app.use(cors());

// El puerto lo asignará Render automáticamente
const PORT = process.env.PORT || 3000;

// Estos son los datos de tu fábrica (El JSON que pide el profesor)
let datosFabrica = {
  puerta: { estado: "Cerrada", ultimoAcceso: "Usuario1" },
  prensa: { estado: "Trabajando", ciclos: 125, error: false },
  generador: { nivelEnergia: 85.5, estado: "Normal", consumo: 45.0 }
};

// Cuando Unity acceda a la URL de la API, le enviamos los datos
app.get('/api/estado', (req, res) => {
    res.json(datosFabrica);
});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`La API de la fábrica está funcionando en el puerto ${PORT}`);
});
