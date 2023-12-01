const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./routes/routes');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send(`Server en Node.js con express`);
});

/* Llamado a la funcion de rutas */
routerApi(app);

/* Ejecucion  */
app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
