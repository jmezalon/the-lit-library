const searchResults = document.querySelector(".result-container")
const inputBarForm = document.querySelector("#search-drinks")
inputBarForm.required = true;
const selectBoroughBar = document.querySelector("#borough-dropdown")
const selectStrengthBar = document.querySelector("#drink-strength")
let resultOfBorough, resultOfStrength;

    

// Jean's seciton
function renderNotFound() {
    searchResults.replaceChildren()

    const div = document.createElement('div')
    const message = document.createElement('h3')
    const icon = document.createElement('h1')

    icon.textContent = '😢'
    message.textContent = 'Sorry, we don\'t quite have that drink yet. check back next time!'

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
    
    drinkCardDiv.append(barName, barImage, drinkName, drinkStrength, comments)
    searchResults.appendChild(drinkCardDiv)
    
    inputBarForm.reset() 
}
    

function handleSearchSubmit(e) {
    e.preventDefault()

    const userInput= inputBarForm.querySelector("#search-for-drinks").value
    const noInput = document.createElement('span')
    noInput.textContent = "**add an input**"
    noInput.style.color = 'red'
    
    userInput !== "" ? searchResults.replaceChildren() : null

    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .catch(err => console.log("err: ", err.message))
    .then(drinks => {

        if (!userInput && inputBarForm.lastElementChild.type === "submit") {  
            inputBarForm.appendChild(noInput)
        } else if (userInput && inputBarForm.lastElementChild.type !== "submit") {
            inputBarForm.removeChild(inputBarForm.lastElementChild)
            searchResults.replaceChildren()
        } 
        
        let filteredDrinks = drinks.filter(drinkObj => drinkObj.drink.toLowerCase() === userInput.toLowerCase())
        
        if (userInput) {
            { filteredDrinks.length !== 0 ? filteredDrinks.map(renderOneDrinks) : renderNotFound()  }
        } 
    })
}

inputBarForm.addEventListener("submit", handleSearchSubmit)


// Tiffany's code

// filter strength
selectStrengthBar.addEventListener('change',() => {
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(drinks => {

        searchResults.replaceChildren()
        resultOfStrength = drinks.filter( function (drinkObj) {          
            return drinkObj.strength === selectStrengthBar.value;
        })

        { resultOfStrength.length !== 0 ? resultOfStrength.map(renderOneDrinks) : renderNotFound()  }
    }) 
})

// Dominick's code

//----Filter Location
selectBoroughBar.addEventListener('change',() => {
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(drinks => {

       searchResults.replaceChildren()
        resultOfBorough = drinks.filter( function (drinkObj) {
          
            return drinkObj.location === selectBoroughBar.value;
            
        })

        { resultOfBorough.length !== 0 ? resultOfBorough.map(renderOneDrinks) : renderNotFound()  }
    }) 
})

