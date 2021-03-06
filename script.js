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
      <div class="card-section" >
        <div class="card1">
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

        <div class="card2">
          <div class="user-intro" >
              <img class="avatar2" src="${user.avatar_url}" alt="${user.name}" />
              <h2 class="user-name2"> ${user.name} </h2>
              <p class="user-sub2" > ${user.location} </p>
              <p class="user-sub2" > ${user.company} </p>
              <p class="user-sub2" > Email: ${user.email} </p>
              <p class="user-sub2" > Twitter: ${user.twitter_username} </p>
          </div>
          <div class="user-info" >
              <p class="user-bio2" > ${user.bio} </p>
              <ul class="info" >
              <li> Followers: ${user.followers} </li>
              <li> Following: ${user.following} </li>
              <li> Public Repositories: ${user.public_repos} </li>
            </ul>
          </div>
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
