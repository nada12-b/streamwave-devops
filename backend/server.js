const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🚀 Backend StreamWave en ligne !');
});

app.listen(PORT, () => {
  console.log(`✅ Serveur backend démarré sur le port ${PORT}`);
});

