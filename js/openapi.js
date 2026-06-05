var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "005c9c26e8ecdb82edd97cdefecd5119");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let leagueButton = document.getElementById("leagues-button")
let teamsButton = document.getElementById("teams-button")

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //ADD EVENT LISTENERS FOR CLICKING BUTTONS

  leagueButton.addEventListener("click", fetch("https://v3.football.api-sports.io/teams?league=1&season=2022", requestOptions))
  teamsButton.addEventListener("click", fetch("https://v3.football.api-sports.io/teams?league=1&season=2014", requestOptions))