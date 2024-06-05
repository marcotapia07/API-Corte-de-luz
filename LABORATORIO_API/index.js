const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Datos simulados de los horarios de cortes de luz
const schedules = [
  { id: 1, contractId: '12345', date: '2024-06-05', startTime: '08:00', endTime: '10:00' },
  { id: 2, contractId: '67890', date: '2024-06-06', startTime: '12:00', endTime: '14:00' }
];

// Ruta para obtener el horario de cortes de luz por número de contrato
app.get('/api/schedule/:contractId', (req, res) => {
  const { contractId } = req.params;
  const schedule = schedules.find(s => s.contractId === contractId);

  if (!schedule) {
    return res.status(404).json({ error: 'Horario no encontrado' });
  }

  res.json(schedule);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

