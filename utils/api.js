/* Consumo de las citas programadas */
async function getScheduledAppointments() {
  let api = 'https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json';
  try {
    let res = await fetch(api);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getScheduledAppointments }