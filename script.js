const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
  const resp = await fetch(APIURL + user);
  const respData = await resp.json();

  creatUserCard(respData);
}

getUser("btmortondev");

function creatUserCard(user) {
  const cardHTML = `
        <div class="card">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            <h2 class="user-name"> ${user.name} </h2>
        </div>
        <div class="user-info" >
            <p class="user-bio" > ${user.bio} </p>
            <ul class="info" >
            <li> Followers: ${user.followers} </li>
            <li> Following: ${user.following} </li>
            <li> Public Repositories: ${user.public_repos} </li>
        </ul>
        </div>
        </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);

    search.value = "";
  }
});
