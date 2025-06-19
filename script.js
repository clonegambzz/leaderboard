const users = [
  {
    username: "Marshmello",
    wagered: 500,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "Nigga Casino",
    wagered: 250,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "Innocent",
    wagered: 150,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "hee",
    wagered: 75,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "u",
    wagered: 25,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "v",
    wagered: 0,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  { username: "", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" },
  { username: "", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" },
  { username: "", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" },
  { username: "", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" }
];

function renderLeaderboard() {
  const container = document.getElementById("leaderboard");
  container.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("div");
    row.className = "row";

    if (index === 0) row.classList.add("top1");
    if (index === 1) row.classList.add("top2");
    if (index === 2) row.classList.add("top3");

    const avatar = `<img src="${user.avatar}" alt="Logo">`;

    row.innerHTML = `
      <div class="rank">#${index + 1}</div>
      <div class="name">${avatar} ${user.username || "—"}</div>
      <div class="amount">$${user.wagered}</div>
    `;
    container.appendChild(row);
  });
}

window.addEventListener("load", renderLeaderboard);
