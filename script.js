const searchResults = document.querySelector(".result-container")
const inputBarForm = document.querySelector("#search-drinks")
const selectBoroughBar = document.querySelector("#borough-dropdown")
const selectStrengthBar = document.querySelector("#drink-strength")




function renderNotFound() {

    searchResults.replaceChildren()


    const div = document.createElement('div')
    const message = document.createElement('h3')
    const icon = document.createElement('h1')

    icon.textContent = '😢'
    message.textContent = 'sorry, we don\'t quite have that drink yet. check back next time!'

    div.append(icon, message)

    searchResults.appendChild(div)

    inputBarForm.reset()

}


function renderOneDrinks(drinkObj) {

    
    const drinkCardDiv = document.createElement('div')
    drinkCardDiv.className = "drink-card"
    const drinkName = document.createElement('h2')
    const drinkStrength = document.createElement('p')
    const barImage = document.createElement('img')
    const barName = document.createElement('h3')
    const comments = document.createElement('p')
    
    drinkName.innerText = drinkObj.drink
    drinkStrength.innerText = drinkObj.strength
    barImage.src = drinkObj.image
    barName.innerText = drinkObj.bar
    comments.innerText = drinkObj.comment
    
    drinkCardDiv.append(drinkName, drinkStrength, barImage, barName, comments)
    
    searchResults.appendChild(drinkCardDiv)
    
    
    
    inputBarForm.reset() 
}
    

function handleSearchSubmit(e) {
    e.preventDefault()
    const userInput= inputBarForm.querySelector("#search-for-drinks").value
    
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .catch(err => console.log("err: ", err.message))
    .then(drinks => {
        searchResults.replaceChildren()
        let filteredDrinks = drinks.filter(drinkObj => drinkObj.drink.toLowerCase() === userInput.toLowerCase())
        
        filteredDrinks.length !== 0 ? filteredDrinks.map(renderOneDrinks) : renderNotFound()
    })
}

inputBarForm.addEventListener("submit", handleSearchSubmit)