document.getElementById('generate-btn').addEventListener('click', () => {
  const icao = document.getElementById('icao').value;
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const windSpeed = document.getElementById('wind-speed').value;
  const windDirection = document.getElementById('wind-direction').value;
  const visibility = document.getElementById('visibility').value;
  const clouds = document.getElementById('clouds').value;
  const temperature = document.getElementById('temperature').value;
  const dewpoint = document.getElementById('dewpoint').value;
  const weather = document.getElementById('weather').value;
  const pressure = document.getElementById('pressure').value;

  const metar = `METAR ${icao} ${day}${time}Z ${windSpeed}${windDirection} ${visibility} ${clouds} ${temperature}/${dewpoint} ${weather} Q${pressure}`

  document.getElementById('metar-output').textContent = metar;
})