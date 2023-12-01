/* Consumo del API */
const { getScheduledAppointments } = require('./../utils/api');

const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

/* Transformacion de la data */
const transformData = (data) => {

  // Transformar objeto para manipular data
  return data.map((obj) => {
    let newObj = {}
    for (let key in obj) {
      newObj[key.toLowerCase()] = obj[key];
    }
    
    // Estructuracion para manipular el objeto
    data = {
      ...newObj,
      hour: parseInt(newObj.hour.split(':').shift()),
      minutes: parseInt(newObj.hour.split(':').pop()),
    }
    return data
  });

}

/* Obtener el numero total de espacios disponibles */
const getSpacesAvailable = async (day) => {

  // Obtener el arreglo de citas programadas
  const data = transformData(await getScheduledAppointments());

  // Obtener citas del dia
  const dayAppointments = data.filter(item => item.day === day && item.hour <= 17);

  // Obtener minutos citas del dia
  const minutesNotAvailable = dayAppointments.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.duration), 0);

  // Obtener minutos disponibles | 9:00 a 17:00
  const minutesAvailable = (17 - 9) * 60;

  // Obtener espacios disponibles teniendo en cuenta la duración mínima de 30 minutos
  return spaceAvailable = Math.floor((minutesAvailable - minutesNotAvailable) / 30);

}

module.exports = { days, transformData, getSpacesAvailable }