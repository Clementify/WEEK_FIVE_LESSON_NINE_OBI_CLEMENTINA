// Task 2: Define a “userBio” object with the following properties: occupation, height, gender, and nationality. Using object destructuring, get “gender” and “occupation” from the .  Use template literals to make a statement that displays the user’s gender and occupation. Call the function three times with three different users.

const userBio ={
    occupation: 'programmer',
    height: '5.8ft',
    gender: 'female', 
    nationality:'Nigerian'
}
let{gender,occupation}=userBio
console.log(`The user is a ${gender} Tech enthusiast and works at LmTechHub as a ${occupation}.`)
