// Task 1: Define an arrow function that takes four arguments: date of birth(DOB), year, name, and location. The function should calculate the user’s age. Using template literal, dynamically display the “Hello name(user’s name) from (location), your current age is (age) and returns the age.

// Write something
const person =  (dob,year, name, location) => {
    let age = year - dob ;
    let answer = ` Hi, i am ${name} from ${location}. My current age is ${age}`
    console.log(answer);
    return age;
}
person(1992,2023, 'Tina','AWka')