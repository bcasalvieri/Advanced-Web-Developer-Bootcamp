function getMostFollowers(...usernames) {
  let baseUrl = 'https://api.github.com/users/';
  let urls = usernames.map(username => $.getJSON(baseUrl + username));
  return Promise
    .all(urls)
    .then(function(data) {
      let max = data.sort((a,b) => a.followers < b.followers)[0];
      return `${max.name} has the most followers with ${max.followers}`;
    })
}

function starWarsString(id) {
  let str = '';
  return $.getJSON(`https://swapi.co/api/people/${id}/`)
    .then(function(data) {
      str += `${data.name} is feature in `
      let filmData = data.films[0];
      return $.getJSON(filmData)
    })
    .then(function(res) {
      str += `${res.title}, directed by ${res.director} `;
      let planetData = res.planets[0];
      return $.getJSON(planetData);
    })
    .then(function(res) {
      str += `and it takes place on ${res.name}`;
      return str;
    })
    .then(function(finalStr) {
      return finalStr;
    })
}