const users = [
  { username: "PlayerOne", wagered: 500 },
  { username: "LuckyStar", wagered: 300 },
  { username: "ProGamer", wagered: 800 },
  { username: "Speedy", wagered: 250 },
  { username: "Zebra99", wagered: 450 }
];

function updateLeaderboard() {
  const tableBody = document.querySelector("#leaderboard tbody");
  tableBody.innerHTML = ""; // Clear old rows

  users.sort((a, b) => b.wagered - a.wagered); // Sort by highest

  users.forEach((user, index) => {
    let medal = "";
    if (index === 0) medal = "🥇";
    else if (index === 1) medal = "🥈";
    else if (index === 2) medal = "🥉";

    const row = `<tr>
      <td>${index + 1} ${medal}</td>
      <td>${user.username}</td>
      <td>$${user.wagered}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Run once at start
updateLeaderboard();

// Run again every 10 seconds (10,000 milliseconds)
setInterval(updateLeaderboard, 10000);

