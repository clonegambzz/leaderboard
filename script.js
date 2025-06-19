const users = [
  { username: "Marshmello", wagered: 500 },
  { username: "Nigga Casino", wagered: 250 },
  { username: "Innocent", wagered: 150 },
  { username: "Shaan", wagered: 75 },
  { username: "Chut lae lo", wagered: 25 },
  { username: "nigga TopG", wagered: 0 },
  { username: "", wagered: 0 },
  { username: "", wagered: 0 },
  { username: "", wagered: 0 },
  { username: "", wagered: 0 }
];

function renderLeaderboard() {
  const container = document.getElementById("leaderboard");
  container.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("div");
    row.className = "row";

    const avatar = user.username
      ? `<img src="https://rainbet.com/logo.png" alt="Logo">`
      : `<img src="https://rainbet.com/logo.png" alt="Logo">`;

    row.innerHTML = `
      <div class="rank">#${index + 1}</div>
      <div class="name">${avatar} ${user.username || "—"}</div>
      <div class="amount">$${user.wagered}</div>
    `;
    container.appendChild(row);
  });
}

window.addEventListener("load", renderLeaderboard);
