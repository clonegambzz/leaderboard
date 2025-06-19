const users = [
  { username: "PlayerOne", wagered: 500 },
  { username: "LuckyStar", wagered: 300 },
  { username: "ProGamer", wagered: 800 },
  { username: "Speedy", wagered: 250 },
  { username: "Zebra99", wagered: 450 }
];

function updateLeaderboard() {
  const tableBody = document.querySelector("#leaderboard tbody");
  tableBody.innerHTML = "";

  users.sort((a, b) => b.wagered - a.wagered);

  users.forEach((user, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${user.username}</td>
      <td>$${user.wagered}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

updateLeaderboard();
