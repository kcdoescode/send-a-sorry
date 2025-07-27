const madBtn = document.getElementById('madBtn');
const forgiveBtn = document.getElementById('forgiveBtn');
const tulipArea = document.getElementById('tulipArea');
const popup = document.getElementById('popup');

madBtn.addEventListener('click', () => {
  tulipArea.innerHTML += '🌷';
  createPetal();
});

forgiveBtn.addEventListener('click', () => {
  document.getElementById('mainText').textContent =
    "woahhh! Thank god, see i might not be call person, but i can do THIS 😉😬";
  document.getElementById('subText').textContent =
    "Can we get back to gossip now, i miss you! 😇✨";
  showPopup();
  for (let i = 0; i < 10; i++) createPetal();
});

function showPopup() {
  popup.classList.remove('hidden');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (3 + Math.random() * 2) + 's';
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 5000);
}
