var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "XxXxXxXxXxXxXxXxXxXxXxXx");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

fetch("https://v3.football.api-sports.io/teams?league=1&season=2022")

fetch("https://v3.football.api-sports.io/teams?league=1&season=2014")