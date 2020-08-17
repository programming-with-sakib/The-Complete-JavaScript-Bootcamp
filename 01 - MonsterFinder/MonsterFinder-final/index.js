import { monsters } from './monsters.js';
console.log(monsters);

showMonsters(monsters);
notFound();

function showMonsters(monsters) {
  for (let monster of monsters) {
    // image
    const monsterImage = document.createElement('img');
    monsterImage.src = `https://robohash.org/${monster.id}?set=set2`;
    monsterImage.alt = monster.name;

    // name
    const monsterName = document.createElement('p');
    monsterName.className = 'name';
    monsterName.innerText = monster.name;

    // email
    const monsterEmail = document.createElement('p');
    monsterEmail.className = 'email';
    monsterEmail.innerText = monster.email;

    // parent node
    const parent = document.createElement('div');
    parent.className = 'monster';
    parent.append(monsterImage, monsterName, monsterEmail);

    document.querySelector('.monsters').append(parent);
  }
}

function notFound() {
  const error = document.createElement('div');
  error.className = 'p-5 not-found';
  error.style.display = 'none';

  const span = document.createElement('span');
  span.innerText = '404';

  const h1 = document.createElement('h1');
  h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';
  error.append(span, h1);

  document.querySelector('.monsters').append(error);
}

document
  .querySelector('#search-monster')
  .addEventListener('keyup', searchMonster);

function searchMonster(e) {
  const keyword = e.target.value.toLowerCase();
  const monsters = document.querySelectorAll('.monster');

  let foundOne = false;

  monsters.forEach((monster) => {
    const name = monster.children[1].innerText.toLowerCase();
    const email = monster.children[2].innerText.toLowerCase();
    if (name.includes(keyword) || email.includes(keyword)) {
      monster.style.display = 'block';
      foundOne = true;
    } else {
      monster.style.display = 'none';
    }
  });

  let notFound = document.querySelector('.not-found');
  notFound.style.display = foundOne === true ? 'none' : 'block';
}

document
  .querySelector('#search-monster-form')
  .addEventListener('submit', (e) => e.preventDefault());
