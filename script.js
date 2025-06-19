const users = [
  { username: "RapidVibe488", wagered: 250 },
  { username: "LIGHT57", wagered: 500 },
  { username: "gebuii", wagered: 150 }
];

function renderLeaderboard() {
  const container = document.getElementById("leaderboard");
  container.innerHTML = "";

  users.sort((a, b) => b.wagered - a.wagered);

  users.forEach((user, i) => {
    const card = document.createElement("div");
    card.className = "card";
    if (i === 0) card.classList.add("highlight");

    card.innerHTML = `
      <img src="https://rainbet.com/logo.png" alt="Avatar" class="avatar"/>
      <h3>${user.username}</h3>
      <p class="label">Wagered:</p>
      <p class="value">$${user.wagered}</p>
    `;
    container.appendChild(card);
  });
}

window.addEventListener("load", renderLeaderboard);
