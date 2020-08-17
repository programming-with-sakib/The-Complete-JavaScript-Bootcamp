// API KEY
let CLIENT_ID = '5e5eb63d9885dfd5caaf';
let CLIENT_SECRET = '5aceec0aa5e956ad7baa1e9abf8947f66f129c1d';

async function getUser(name) {
  const res = await fetch(
    `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
  const profile = await res.json();

  return profile;
}

async function getRepos(profile) {
  const { repos_url, public_repos } = profile;
  const res = await fetch(
    `${repos_url}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&sort=created:asc&per_page=${public_repos}`
  );

  const repos = await res.json();
  return repos;
}

document.querySelector('#search').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.querySelector('#findByUsername').value;

  if (username.length > 0) {
    showLoading();

    const profile = await getUser(username);

    if (profile.message === 'Not Found') {
      document.querySelector('.notFound').style.display = 'block';
      document.querySelector('.loader').style.display = 'none';
    } else {
      showProfile(profile);

      const repos = await getRepos(profile);
      showRepos(repos);

      showContent();
    }

    document.querySelector('#findByUsername').value = '';
  }
});

function showRepos(repo) {
  let repoHTML = '';

  repo.forEach((r) => {
    repoHTML += `
    <div class="repo">
      <div class="repo_name">
        <a href="${r.html_url}" target="_blank">${r.name}</a>
      </div>
      <p>
        <span class="circle"></span> ${r.language}
        <ion-icon name="star-outline"></ion-icon> ${r.watchers}
        <ion-icon name="git-branch-outline"></ion-icon> ${r.forks_count}
      </p>
    </div>
    `;
  });

  document.querySelector('.repos').innerHTML = repoHTML;
}

function showProfile(profile) {
  document.querySelector('.profile').innerHTML = `
    <img
      src="${profile.avatar_url}"
      alt="${profile.name}"
    />
    <p class="name">${profile.name}</p>
    <p class="username login">${profile.login}</p>
    <p class="bio">
      ${profile.bio}
    </p>

    <div class="followers-stars">
      <p>
        <ion-icon name="people-outline"></ion-icon>
        <span class="followers"> ${profile.followers} </span> followers
      </p>
      <span class="dot">·</span>
      <p><span class="following"> ${profile.following} </span> following</p>
    </div>

    <p class="company">
      <ion-icon name="business-outline"></ion-icon>
      ${profile.company}
    </p>
    <p class="location">
      <ion-icon name="location-outline"></ion-icon>${profile.location}
    </p>
  `;
}

function showLoading() {
  document.querySelector('.notFound').style.display = 'none';
  document.querySelector('.loader').style.display = 'block';
  document.querySelector('.user-details').style.display = 'none';
}

function showContent() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.user-details').style.display = 'flex';
}
