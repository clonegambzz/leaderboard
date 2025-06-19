const users = [
  { username: "Marshmello", wagered: 900, logo: "logo1.png" },
  { username: "User2", wagered: 700, logo: "logo2.png" },
  { username: "User3", wagered: 500, logo: "logo3.png" },
  { username: "User4", wagered: 400, logo: "logo4.png" },
  { username: "User5", wagered: 300, logo: "logo5.png" },
  { username: "User6", wagered: 250, logo: "logo6.png" },
  { username: "User7", wagered: 200, logo: "logo7.png" },
  { username: "User8", wagered: 150, logo: "logo8.png" },
  { username: "User9", wagered: 100, logo: "logo9.png" },
  { username: "User10", wagered: 50, logo: "logo10.png" }
];

function renderLeaderboard() {
  const topThreeContainer = document.getElementById("top-three");
  const rankingsContainer = document.getElementById("rankings");

  topThreeContainer.innerHTML = "";
  rankingsContainer.innerHTML = "";

  users.slice(0, 3).forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${user.logo}" alt="User Logo" />
      <h3>#${index + 1} ${user.username}</h3>
      <p>Wagered: $${user.wagered}</p>
    `;
    topThreeContainer.appendChild(card);
  });

  users.slice(3).forEach((user, index) => {
    const row = document.createElement("div");
    row.className = "rank";
    row.innerHTML = `
      <span><img src="${user.logo}" class="rank-logo" alt="Logo" />#${index + 4} ${user.username}</span>
      <span>$${user.wagered}</span>
    `;
    rankingsContainer.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLeaderboard();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

// Countdown Timer
function updateCountdown() {
  const endDate = new Date("2025-07-09T00:00:00");
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "LEADERBOARD HAS ENDED";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days-left").innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}
