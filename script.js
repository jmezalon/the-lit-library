const searchResults = document.querySelector(".result-container")
const inputBarForm = document.querySelector("#search-drinks")
const selectBoroughBar = document.querySelector("#borough-dropdown")
const selectStrengthBar = document.querySelector("#drink-strength")
let resultOfBorough, resultOfStrength;

// firstFormBar.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const userInput= firstFormBar.querySelector("#search-for-drinks").value
//     //console.log(userInput)
//     fetch("http://localhost:3000/drinks")
//     .then(resp => resp.json())
//     .then(drinks => drinks.forEach(drinkObj => {
//         const resultName = document.createElement('h3')
//         const resultImage = document.createElement('img')
//         const resultDrink = document.createElement('p')
//         const resultStrength = document.createElement('p')
//         resultName.innerText = drinkObj.bar
//         resultImage.src = drinkObj.image
//         resultDrink.innerText = drinkObj.drink
//         resultStrength.innerText = drinkObj.strength
//         addSearchResults.append(resultImage, resultName, resultDrink, resultStrength)
//     })
//     )

// //fetch json data
// fetch("http://localhost:3000/drinks")
//     .then(resp => resp.json())
//     .then(drinks => drinks.forEach(drinkObj => {
//         changeStrengthDetail(drinkObj)
//     }))

// //create change event   
// function changeStrengthDetail(drinkObj) {
//     selectStrengthBar.addEventListener("change", () => {
// //detail change event using filter()
//     const newDrinkresults = {
//         resultStrength.filter(drinkObj => drinkObj.strength === selectStrengthBar)

// return newDrinkresults.replace(addSearchResults)
// })
// }
// console.log(newDrinkresults)

// filter strength
selectStrengthBar.addEventListener('change',() => {
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(drinks => {
    // function filtering(drinkObj) 


        resultOfStrength = drinks.filter( function (drinkObj) {
            // console.log(selectBoroughBar.value)
          
            return drinkObj.strength === selectStrengthBar.value;
            
        })
        // .map(drinkObj =>{

        //     return drinkObj.bar
        // })
        
        console.log(resultOfStrength)
    }) 
})

//----Filter Location
selectBoroughBar.addEventListener('change',() => {
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(drinks => {
    // function filtering(drinkObj) 

//hi
        resultOfBorough = drinks.filter( function (drinkObj) {
            // console.log(selectBoroughBar.value)
          
            return drinkObj.location === selectBoroughBar.value;
            
        })
        // .map(drinkObj =>{

        //     return drinkObj.bar
        // })
        
        console.log(resultOfBorough)
    }) 
})


        
  