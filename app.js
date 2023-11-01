let lightIndex = 0;
const lights = document.querySelectorAll('.light');

function changeLight() {
  lights[lightIndex].classList.remove('active');
  lightIndex = (lightIndex + 1) % 3;
  lights[lightIndex].classList.add('active');
}

changeLight(); // Initial call to start the traffic light with red

// Optionally, you can set a timer to change the light automatically
// setInterval(changeLight, 2000); // Change light every 2 seconds
