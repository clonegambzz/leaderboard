// Dummy data
const users = [
  { username: "ProGamer", wagered: 800 },
  { username: "PlayerOne", wagered: 500 },
  { username: "Zebra99", wagered: 450 },
  { username: "LuckyStar", wagered: 300 },
  { username: "Speedy", wagered: 250 }
];

function updateLeaderboard() {
  const tableBody = document.querySelector("#leaderboard tbody");
  tableBody.innerHTML = "";

  users.sort((a, b) => b.wagered - a.wagered);

  users.forEach((user, index) => {
    let medal = "";
    if (index === 0) medal = "🥇";
    else if (index === 1) medal = "🥈";
    else if (index === 2) medal = "🥉";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1} ${medal}</td>
      <td>${user.username}</td>
      <td>$${user.wagered}</td>
    `;
    tableBody.appendChild(row);
  });

  // Hide loader and show leaderboard
  document.getElementById("loader").style.display = "none";
  document.getElementById("leaderboard").style.display = "table";

  // 🎉 Show confetti if 1st place exists
  if (users.length > 0) {
    launchConfetti();
  }
}

// Show spinner, then load leaderboard
setTimeout(updateLeaderboard, 2000);
setInterval(updateLeaderboard, 10000);

// 🎉 Confetti using canvas-confetti library
function launchConfetti() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}

// Load the confetti script dynamically
(function loadConfettiScript() {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  document.body.appendChild(script);
})();


