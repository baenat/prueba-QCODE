const express = require('express');
const router = express.Router();

const { days, getSpacesAvailable } = require('./../utils/helper');

router.get('/', async (request, response) => {

  try {

    const { day } = request.query;

    /* Validar los dias semanales Lun - Vie */
    if (!days.includes(day)) {
      return response.status(400).json(
        {
          message: `No es un dia de la semana válido`
        }
      );
    }

    const resSpacesAvailable = await getSpacesAvailable(day.toLowerCase());

    response.status(200).json(
      {
        day: `${day.toUpperCase()}`,
        spacesAvailable: resSpacesAvailable,
        message: `Total de espacios disponibles para el (${day.toUpperCase()}) son: ${resSpacesAvailable}`
      }
    );
  } catch (error) {
    response.status(500).json(
      {
        message: 'Surgio el siguiente error' + error
      }
    )
  }
});

module.exports = router;