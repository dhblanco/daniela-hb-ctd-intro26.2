var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "005c9c26e8ecdb82edd97cdefecd5119");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let leagueButton = document.getElementById("leagues-button")
let teamsButton = document.getElementById("teams-button")
let leaguesList = document.getElementById("leagues")
let teamsList = document.getElementById("teams")

  //ADD EVENT LISTENERS FOR CLICKING BUTTONS
  //USER CLICKS BUTTON "leaguesButton" "teamsButton"
  //RUN FUNCTION
  //FETCH API DATA
  //CONVERT TO JSON
  //HOW TO GATHER leauges.name and teams.name
  //CREATE LI ELEMENTS
  //APPEND TO UL "leagues" "teams"

  fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  teamsButton,Button.addEventListener("click", function(){
    fetch("https://v3.football.api-sports.io/teams?league=1&season=2022", requestOptions)
    .then(response => {
      throw New Error (`Response status: ${response.status}`)
    }
    return response.json() //?? list of team names that played in 2022 world cup
  })

  

  //fetch('https://api.github.com/users/dhblanco/repos')
    // .then(response => {
        // if (!response.ok) {
            // throw new Error(`Response status: ${response.status}`);
    // }
        // return response.json()
    // })
    // .then(repositories => {
        // console.log(repositories)
        // for (let i = 0; i < repositories.length; i++) {
            // let project = document.createElement('li')
            // project.innerHTML = `<a target='_blank' href='${repositories[i].html_url}'>${repositories[i].name}</a>`
            // projectList.appendChild(project) 
            // }
    // })
    // .catch(error => {
        // projectSection.innerText = 'Failed to load projects'
        // console.error('An error occured', error);
    // })
