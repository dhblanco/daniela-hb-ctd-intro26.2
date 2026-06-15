// DECLARING SECTION VARIABLES
let skillsSection = document.getElementById("skills"); 
let messageSection = document.getElementById("messages")
let projectSection = document.getElementById('projects')
let skillsList = skillsSection.querySelector('ul');
let messageList = messageSection.querySelector('ul'); 
let projectList = projectSection.querySelector('ul')

//DYNAMIC SKILLS SECTION
let skills = ["JavaScript", "HTML", "CSS", "API Requests", "DOM Manipulation", "Git / GitHub", "Avid Learner"];
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i]; // Use innerText for plain text
    skillsList.appendChild(skill);
}

//PROJECT SECTION - PULLS FROM GITHUB API
fetch('https://api.github.com/users/dhblanco/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
    }
        return response.json()
    })
    .then(repositories => {
        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement('li')
            project.innerHTML = `<a target='_blank' href='${repositories[i].html_url}'>${repositories[i].name}</a>`
            projectList.appendChild(project) 
            }
    })
    .catch(error => {
        projectSection.innerText = 'Failed to load projects'
        console.error('An error occured', error);
    })

//FORM SECTION
let messageForm = document.querySelector('form[name="leave_message"]')

messageForm.addEventListener('submit',function(event){
    event.preventDefault();
    let name = event.target.usersName.value
    let email = event.target.usersEmail.value
    let message = event.target.usersMessage.value
    let newMessage = document.createElement('li');
    messageList.appendChild(newMessage);
    newMessage.innerHTML =
`~ NAME:    ${name}
~ EMAIL:    <a href='mailto:${email}'>${email}</a>
~ MESSAGE:  <span id='msg-span'>${message}</span>        `

    //EDIT SUBMITTED MESSAGES USING BUTTON
    let removeButton = document.createElement("button")
    removeButton.setAttribute('type', 'button')
    removeButton.innerText = "remove"
    newMessage.appendChild(removeButton)
    removeButton.addEventListener('click',function(){
        let entry = removeButton.parentNode
        entry.remove()
    })
    let editButton = document.createElement("button")
    editButton.setAttribute('type', 'button')
    editButton.innerText = "edit message"
    newMessage.appendChild(editButton)
    editButton.addEventListener('click',function(){
        let msgSpan = newMessage.querySelector("#msg-span")
        let msg = prompt("Enter new message")
        msg
        if (msg === null) {
            return;
        } else {
            msgSpan.innerText = msg
        }
    })

 messageForm.reset()
})

    // FUTURE PERSONAL GOALS: Edit newMessage to better emulate terminal style messges
    // > > Example:  newMessage.innerHTML = 
    //               `<span class="userTerminal">visitor@portfolio</span> <span class="pathTerminal">MINGW64 ~/guestbook</span> (messages) 
    //              $ git commit --author="<a href="mailto:${email}" class="email">${name}</a>" -m "${message}" `;

    // FUTURE PERSONAL GOALS: Add aN "edit" and "show email" button
    //  - add button inline before "remove button"
    //  - create a new element to simulate a terminal entry
    //  > > for example: `$ git config user.email <br> ${email}`

// DYNAMIC FOOTER
let today = new Date()
let thisYear = today.getFullYear()
let footer = document.querySelector('footer')
let copyRight = document.createElement('p')
copyRight.innerHTML = `&copy; ${thisYear} Daniela Hernández Blanco`
footer.appendChild(copyRight)
