const addSearchResults = document.querySelector(".result-container")
const inputBar = document.querySelector("#search-drinks")
const selectBoroughBar = document.querySelector("#select-borough")
const selectStrengthBar = document.querySelector("#drink-borough")

firstFormBar.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInput= firstFormBar.querySelector("#search-for-drinks").value
    //console.log(userInput)
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(drinks => drinks.forEach(drinkObj => {
        const resultName = document.createElement('h3')
        const resultImage = document.createElement('img')
        const resultDrink = document.createElement('p')
        const resultStrength = document.createElement('p')
        resultName.innerText = drinkObj.bar
        resultImage.src = drinkObj.image
        resultDrink.innerText = drinkObj.drink
        resultStrength.innerText = drinkObj.strength
        addSearchResults.append(resultImage, resultName, resultDrink, resultStrength)
    })
    )
    

})