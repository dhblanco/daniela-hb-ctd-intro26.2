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
// AIRHUB suggests to get the skills and messages section by its ID first
let skillsSection = document.getElementById("skills"); 
let messageSection = document.getElementById("messages")

// Then query the <ul> from the section variables
let skillsList = skillsSection.querySelector('ul');
let messageList = messageSection.querySelector('ul'); 

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i]; // Use innerText for plain text
    skillsList.appendChild(skill);
}

//Form
let messageForm = document.querySelector('form[name="leave_message"]')
console.log(messageForm)
messageForm.addEventListener('submit',function(event){
    event.preventDefault();
    let name = event.target.usersName.value
    let email = event.target.usersEmail.value
    let message = event.target.usersMessage.value
    console.log(name)
    console.log(email)
    console.log(message)
    
    // INSTRUCTION NOTES: The spec calls for each new message <li> 
    //  -  to contain an <a> with the user’s name 
    //  -  linking via mailto: and a <span> for the message. 
    //  > > for example: <a href="mailto:email@example.com">User Name</a><span>The message text</span>.
    
    let newMessage = document.createElement('li');
    messageList.appendChild(newMessage);
    newMessage.innerHTML = `$ git commit --author="<a href="mailto:${email}">${name}</a>" -m "<span>${message}</span>" `


    // FUTURE PERSONAL GOALS: Edit newMessage to better emulate terminal style messges
    // > > Example:  newMessage.innerHTML = 
    //               `<span class="userTerminal">visitor@portfolio</span> <span class="pathTerminal">MINGW64 ~/guestbook</span> (messages) 
    //              $ git commit --author="<a href="mailto:${email}" class="email">${name}</a>" -m "${message}" `;

    // FUTURE PERSONAL GOALS: Add a "show email" button
    //  - add button inline before "remove button"
    //  - create a new element to simulate a terminal entry
    //  > > for example: `$ git config user.email <br> ${email}`

    //Remove Button
    let removeButton = document.createElement("button")
    removeButton.setAttribute('type', 'button')
    removeButton.innerText = "remove"

    newMessage.appendChild(removeButton)

    removeButton.addEventListener('click',function(){
        let entry = removeButton.parentNode
        entry.remove()
    })

    messageForm.reset()

})


