let today = new Date()
let thisYear = today.getFullYear()

/* let footer = document.querySelector('footer') */
    /* Instead of inserting footer manually via HTML using document.querySelector, I edited code to create footer using Javascript "in order to more closely the instructions suggested adding the footer via DOM methods." */
 
let footer = document.querySelector('footer')
let copyRight = document.createElement('p')

/* AIRHUB feedback suggested considering using innerText instead, instead of innerHTML to prevent unintended HTML parsing and improve clarity. However, in this case, this would result in the text is treated as literal text, so &copy; would be displayed exactly as written rather than being interpreted as the HTML entity for the copyright symbol. */
copyRight.innerHTML = `&copy; ${thisYear} Daniela Hernández Blanco`

footer.appendChild(copyRight)
document.body.appendChild(footer)

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];

// Prev code: let skillsList = document.querySelector("#skills ul")
// Get the skills section by its ID first
let skillsSection = document.getElementById("skills"); 

// Then query the <ul> from the skillsSection variable
let skillsList = skillsSection.querySelector('ul'); 

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i]; // Use innerText for plain text
    skillsList.appendChild(skill);
}

//Form
let form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
    let name = event.target.usersName.value
    console.log(name)
})