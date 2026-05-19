let today = new Date()
let thisYear = today.getFullYear()

let footer = document.querySelector('footer')
let copyRight = document.createElement('p')
copyRight.innerHTML = `&copy; ${thisYear} Daniela Herández Blanco`

footer.appendChild(copyRight)

let skills = ["JavaScript", "HTML", "CSS", "GitHub"]
let skillsList = document.querySelector("#Skills ul")

for (let i=0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}