// Task 3: Create an array of objects of length 4. Each object should have the following properties: firstName, lastName, complexion, and occupation. Loop through the array, for each item, and display the user’s info in a separate div created dynamically.

const users = [{
    firstName: "Clementina",
    lastName: "Ifebuche",
    complexion: "dark",
    occupation: "programmer"
},

{
    firstName: "Clement",
    lastName: "Ifebuche",
    complexion: "dark",
    occupation: "programmer"
},

{
    firstName: "Clem",
    lastName: "Ifebuche",
    complexion: "dark",
    occupation: "programmer"
},

{
    firstName: "tina",
    lastName: "Ifebuche",
    complexion: "dark",
    occupation: "programmer"
}
]

const div = document.getElementById('div')


users.forEach(user=>{
    const container = document.createElement('div')
    const order = document.createElement('ol')

    let fname = document.createElement('li')
    let lname = document.createElement('li')
    let complexion = document.createElement('li')
    let job = document.createElement('li')

    fname.innerHTML = `<p>${user.firstName}</p>`
    lname.innerHTML = `<p>${user.lastName}</p>`
    complexion.innerHTML = `<p>${user.complexion}</p>`
    job.innerHTML = `<p>${user.occupation}</p>`

    order.appendChild(fname)
    order.appendChild(lname)
    order.appendChild(complexion)
    order.appendChild(job)

    container.appendChild(order)

    container.style.border ='3px solid black'

    div.appendChild(container)

                // OR
    
    
    //  let li = document.createElement('li');
    // li.innerText = ` ${user.firstName} ${user.lastName} is a ${user.occupation} and she is ${user.complexion} in complexion`
    // ol.appendChild(li)
    // div.appendChild(ol)
})