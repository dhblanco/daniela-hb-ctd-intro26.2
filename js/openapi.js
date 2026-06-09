// WELCOME TO MY OPEN API PROJECT FOR CTD INTRO 26.2 COURSE
// GOAL: DISPLAY 2 DATA ENDPOINTS USING NEW GET REQUESTS WHEN USERS CLINK NAVIGATION BUTTON/LINK
// ENDPOINTS: "TEAMS" AND "PLAYERS"

// About this project: I'm learning more about soccer hoping to connect with friends and family who play, as well as my home country, Costa Rica. We didn't qualify for this year's 2026 World Cup, but we have in the past... So I wonder if, for my first endpoint (TEAMS) I can offer a visit to the past and display teams that qualified for each World Cup that we qualified for -- 2022, 2018, 2014, 2006, 2002, and 1990. I also wonder if I can offer, for my second endpoint, information about some top players, including my grandma's favorite, Keylor Navas, and 4 other players including Raquel "Rocky" Rodríguez, Shirely Cruz, Paulo Winchope, and Alonso Martinéz, from my mother's hometown. I'm not sure how to make this happen yet, but I will figure it out!

// IDEAS:
// - USERS CAN SELECT A YEAR FROM THE DROP DOWN MENU
// - FIRST ENDPOINT: USERS CAN THEN CLICK A BUTTON TO SHOW QUALIFYING WORLD CUP TEAMS FOR THAT YEAR
// - SECOND ENDPOINT: USERS CAN SELECT A BUTTON TO DISPLAY PLAYERS FOR THE COSTA RICAN TEAM THAT YEAR
// - ALT: USERS CAN SELECT PLAYERS FROM A DROP DOWN MENU
// - ALT SECOND ENDPOINT: USERS CAN CLICK A BUTTON TO DISPLAY PLAYER INFORMATION

//TO-DO: 
// - REVIEW GROUP MENTOR SESSION TO REF HOW TO CREATE/SELECT FROM DROP DOWN MENU
// - ADD EVENT LISTENERS FOR CLICKING BUTTONS
// - POTENTIALLY CREATE VARIABLES FOR SEASONS AND PLAYERS

//PSEUDOCODE:
  //USER SELECTS YEAR/PLAYER FROM DROP DOWN BUTTON
  //THIS RE/ASSIGNS VALUE TO THE SELECTED VARIABLE "SEASON" OR "ID"
  //USER CLICKS BUTTON "leaguesButton" "teamsButton"
  //RUN FUNCTION
  //CLEAR LIST (REMOVE OBJECT)
  //FETCH API DATA
  //CONVERT TO JSON
  //CREATE LI ELEMENTS
  //APPEND TO UL "leagues" "teams"      //MAY CHANGE THIS TO "seasons" and "player"

const key = "005c9c26e8ecdb82edd97cdefecd5119";
var myHeaders = new Headers();
myHeaders.append("x-apisports-key", key);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let leagueButton = document.getElementById("leagues-button")
let teamsButton = document.getElementById("teams-button")
let leaguesList = document.getElementById("leagues")
let teamsList = document.getElementById("teams")



let seasonYear = document.getElementsByName("season-year")
  // SEASONS TO DISPLAY DATA FROM COSTA RICA'S QUALIFYING WORLD CUPS
  // 1990, 2002, 2006, 2014, 2018, 2022
  // CAN I DECLARE A VARIABLE TO CHANGE AS USER REQUESTS DATA
  // SO FOR EXAMPLE WHEN USER CLICKS BUTTON, LET SEASON = WHAT USER SELECTED MAYBE VIA A DROP DOWN MENU
  // FETCH INFO FOR THAT 
  // VERSUS A LINK LIKE "https://v3.football.api-sports.io/teams?league=1&season=${seasonYear}"  

  async function fetchRepos() {
    try {
        let response = await fetch("https://v3.football.api-sports.io/teams?league=1&season=2022", requestOptions)
        
        if(!response.ok){
            throw new Error(response.status);
        }

        let data = await response.json()
        console.log(data.response)
        for (let i = 0; i < data.response.length; i++) {
          const element = data.response[i]["team"].name;
          console.log(element)
          let name = document.createElement('li')
          name.innerText = element
          teamsList.appendChild(name)
        }
    } catch (error) {
        console.error('An eeror occurred',error)
    }
}

leagueButton,Button.addEventlistener("click", fetchRepos())
console.log(leagueButton);

// SECOND ENDPOINT - PLAYER INFO
// IDEA: SPOTLIGHT KEYLOR NAVAS, A SKILLED GOAL KEEPER FROM MY HOME COUNTRY
// CODE BELOW - REQUEST SAMPLE FROM API-SPORTS.IO

let idNum;
// NEXT STEP
// - ADD A WAY TO CHANGE THE idNum WHEN USER SELECTS DROPDOWN?
fetch (`https://v3.football.api-sports.io/profiles?player=${idNum}`, {
    "method": "GET",
    "headers": {
        "x-apisports-key": key
    }
 })
 .then(response => {
    console.log(response);
 })
 .catch(err => {
    console.log(err);
 })
  
  // teamsButton,Button.addEventListener("click", fetchRepos() {
  //   fetch("https://v3.football.api-sports.io/teams?league=1&season=2022", requestOptions)
  //   .then(response => {
  //     throw New Error (`Response status: ${response.status}`)
  //   }
  //   return response.json() //?? list of team names that played in 2022 world cup
  // })


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
