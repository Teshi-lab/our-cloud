let clouds = [];
let weatherMood = 'sunny';  // Default weather mood

function addCloud() {
  const cloudMessage = prompt("What is your thought or message?");
  if (!cloudMessage) return;

  const newCloud = {
    id: Date.now(),
    message: cloudMessage,
    x: Math.random() * window.innerWidth,
    y: Math.random() * 300,
    speed: Math.random() * 3 + 1
  };

  clouds.push(newCloud);
  renderClouds();
}

function renderClouds() {
  const cloudArea = document.getElementById('cloudArea');
  cloudArea.innerHTML = '';

  clouds.forEach(cloud => {
    const cloudDiv = document.createElement('div');
    cloudDiv.className = 'cloud';
    cloudDiv.style.left = `${cloud.x}px`;
    cloudDiv.style.top = `${cloud.y}px`;
    cloudDiv.textContent = cloud.message;

    cloudDiv.onclick = () => {
      alert(`Message: ${cloud.message}`);
    };

    cloudArea.appendChild(cloudDiv);
    moveCloud(cloud, cloudDiv);
  });
}

function moveCloud(cloud, cloudDiv) {
  setInterval(() => {
    cloud.x += cloud.speed;
    if (cloud.x > window.innerWidth) {
      cloud.x = -200;
    }
    cloudDiv.style.left = `${cloud.x}px`;
  }, 1000 / 60);
}

function setWeather(mood) {
  const weatherDiv = document.getElementById('weather');
  weatherMood = mood;

  if (weatherMood === 'rainy') {
    weatherDiv.textContent = 'It\'s raining, feeling a bit cloudy!';
    document.body.style.backgroundColor = '#80deea';
    document.getElementById('container').style.color = '#00695c';
  } else if (weatherMood === 'sunny') {
    weatherDiv.textContent = 'It\'s sunny, everything feels bright!';
    document.body.style.backgroundColor = '#e0f7fa';
    document.getElementById('container').style.color = '#00796b';
  }
}

setWeather('sunny');
