const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000; // o el puerto que desees utilizar

app.use(cors());
app.use(express.json());

// Endpoint para verificar si un turno ya existe
app.post('/verificar-turno', async (req, res) => {
    try {
        const { fecha, hora } = req.body;
        const response = await axios.get('https://sheet.best/api/sheets/3b9c7881-cb13-4a21-941f-71deb1e1a26e');
        const data = response.data;
        const turnoExistente = data.some((turno) => turno.fecha === fecha && turno.hora === hora);

        if (turnoExistente) {
            res.status(409).json({ error: 'El turno en esta fecha y hora ya existe.' });
        } else {
            res.sendStatus(200);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor al verificar el turno.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
