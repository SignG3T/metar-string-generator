function addToHistory(metar) {
  const timestamp = new Date().toISOString();
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push({ metar, timestamp });
  localStorage.setItem("history", JSON.stringify(history));
}

function showHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  const outputHistory = document.getElementById("output-history");

  if (history.length === 0) {
    outputHistory.innerHTML = "<li>No history available</li>";
  } else {
    outputHistory.innerHTML = "";
    history.forEach((item) => {
      const listItem = document.createElement("li");
      xx = JSON.stringify(item.metar);
      x = xx.split("\"")
      listItem.textContent = x[1];
      outputHistory.appendChild(listItem);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  showHistory();
});

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
  const nosigValue = document.getElementById('nosig').checked;
  const nosig = nosigValue ? "NOSIG" : "";

  const metar = `METAR ${icao} ${day}${time}Z ${windSpeed}${windDirection} ${visibility} ${clouds} ${temperature}/${dewpoint} ${weather} Q${pressure} ${nosig}`

  document.getElementById('metar-output').textContent = metar;

  addToHistory(metar)
})

document.getElementById('copy-btn').addEventListener('click', () => {
  const output = document.getElementById('metar-output').textContent;

  if(output === "-- Generated METAR will appear here --") {
    alert("Please generate a METAR first");
  } else {
  navigator.clipboard.writeText(output);
}
})