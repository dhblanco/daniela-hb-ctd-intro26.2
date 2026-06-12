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

let seasonYears = document.getElementById("season-year")
let seasonYear = seasonYears.value
seasonYears.addEventListener('change',function(event) {
    seasonYear = seasonYears.value
})

// FIRST ENDPOINT: GATHER TEAM NAMES FROM SELECTED WORLD CUPS
let teamsList = document.getElementById("teams")

async function fetchTeams() {
    console.log(`Fetching data from ${seasonYear}`)
    let urlSeason = `https://v3.football.api-sports.io/teams?league=1&season=${seasonYear}`
    console.log(urlSeason)

    try {
        let response = await fetch(urlSeason, requestOptions)
        
        if(!response.ok){
            throw new Error(response.status);
        }

        let data = await response.json()
        
        if(data.errors.plan){
            throw new Error(data.errors.plan);
        } else {
        teamsList.innerHTML = "";
        for (let i = 0; i < data.response.length; i++) {
          const element = data.response[i]["team"].name;
          let name = document.createElement('li')
          name.innerText = element
          teamsList.appendChild(name)
        }}
    } catch (error) {
        console.error('An error occurred:',error)
        teamsList.innerHTML = "";
        teamsList.innerText = error
    }
}
let teamsButton = document.getElementById("teams-button")
console.log(teamsButton);
teamsButton.addEventListener("click", fetchTeams)



// SECOND ENDPOINT: GATHER LEAGUE NAMES THAT A TEAM HAS PLAYED FOR 
let idCountry = "29" // TEAM ID FOR COSTA RICA
let urlLeagues = `https://v3.football.api-sports.io/teams/seasons?team=${idCountry}`
console.log(urlLeagues)
let leaguesList = document.getElementById("leagues")

async function fetchLeagues() {
    console.log("LEAGUE button clicked")

    try {
        let response = await fetch("https://v3.football.api-sports.io/leagues?code=CR", requestOptions)
        
        if(!response.ok){
            throw new Error(response.status);
        }

        let data = await response.json()
        console.log(data);
        
        if(data.errors.plan){
            throw new Error(data.errors.plan);
        } else {
        leaguesList.innerHTML = "";
        for (let i = 0; i < data.response.length; i++) {
          const element = data.response[i]["league"].name;
          let name = document.createElement('li')
          name.innerText = element
          leaguesList.appendChild(name)
        }}

    } catch (error) {
        console.error('An error occurred:',error)
        leaguesList.innerHTML = "";
        leaguesList.innerText = error
    }
}
let leagueButton = document.getElementById("leagues-button")
leagueButton.addEventListener("click", fetchLeagues)

// HIDE BUTTONS 

let hideLeaguesButton = document.getElementById("leagues-hide")
hideLeaguesButton.addEventListener("click", function(){
    console.log("hide leauges button clicked")
            leaguesList.innerHTML = "";
})

let hideTeamsButton = document.getElementById("teams-hide")
hideTeamsButton.addEventListener("click", function(){
    console.log("hide teams button clicked")
            teamsList.innerHTML = "";
})

let hidePlayersButton = document.getElementById("players-hide")
hidePlayersButton.addEventListener("click", function(){
    console.log("hide player button clicked")
            playersList.innerHTML = "";
})

// ANOTHER ENDPOINT - PLAYER INFO
let playersList = document.getElementById("players")
// IDEA: SPOTLIGHT KEYLOR NAVAS, A SKILLED GOAL KEEPER FROM MY HOME COUNTRY
let idNavas = "731" // PLAYER ID FOR KEYLOR - TOP MEN'S, TOP GOALKEEPER
let idRocky = "102215" // PLAYER ID FOR RAQUEL ROCKY RODRIGUEZ - TOP CURRENT WOMEN'S
let idAlonso = "14020" // PLAYER ID FOR ALONSO MARTINEZ - TOP CURRENT MEN'S, FROM MOM'S HOMETOWN I THOUGHT!
let idPlayers = [
    idNavas, idRocky, idAlonso 
]

async function fetchPlayers() {
    //CLEAR LIST EACH FETCH TO PREVENT DUPLICATES
    playersList.innerHTML = "";

    try {
          
        for (let index = 0; index < idPlayers.length; index++) {
           
            let idPlayer = idPlayers[index]
            
            let urlPlayer = `https://v3.football.api-sports.io/players/profiles?player=${idPlayer}`

            console.log(urlPlayer)
    
            let response = await fetch(urlPlayer, requestOptions)
            console.log(response)

            if(!response.ok){
                throw new Error(response.status);
            }

            let data = await response.json()
            console.log(data)    

            if(data.errors.endpoint){
                throw new Error(data.errors.endpoint);
            } else {    
             
            for (let i = 0; i < data.response.length; i++) {
                
                const firstName = data.response[i]["player"].firstname;
                const lastName = data.response[i]["player"].lastname;
                const age = data.response[i]["player"].age
                const position = data.response[i]["player"].position
                const city = data.response[i]["player"].birth.place
                let element = `${firstName} ${lastName}<br>Age: ${age} <br>Position: ${position} <br>Birthplace: ${city}`
                console.log(element)
                let playerInfo = document.createElement('li')
                playerInfo.innerHTML = element
                playersList.appendChild(playerInfo)
            }}
        }

        } catch (error) {
            console.error('An error occurred:',error)
            playersList.innerHTML = "";
            playersList.innerText = error
    }
}

let playersButton = document.getElementById("players-button")
console.log(playersButton);
playersButton.addEventListener("click", fetchPlayers)

// DYNAMIC FOOTER 
let today = new Date()
let thisYear = today.getFullYear()
let footer = document.querySelector('footer')
let copyRight = document.createElement('p')
copyRight.innerHTML = `&copy; ${thisYear} Daniela Hernández Blanco`
footer.appendChild(copyRight)
document.body.appendChild(footer)