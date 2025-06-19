const users = [
  { username: "Marshmello", wagered: 250 },
  { username: "Niggaclone", wagered: 500 },
  { username: "EnoCent", wagered: 150 }
];

function renderLeaderboard() {
  const container = document.getElementById("leaderboard");
  container.innerHTML = "";

  users.sort((a, b) => b.wagered - a.wagered);

  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "card";
    if (index === 1) card.classList.add("highlight-card");

    card.innerHTML = `
      <img src="https://rainbet.com/logo.png" alt="Avatar" class="avatar" />
      <h3>${user.username}</h3>
      <p class="label">Wagered:</p>
      <p class="value">$${user.wagered}</p>
    `;

    container.appendChild(card);
  });
}

window.onload = renderLeaderboard;
