
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let foodContainer = document.querySelector(".food-container");
let heading =document.getElementById("heading");
let contentText  = document.querySelector(".contentText");
let renderFood = async(searchData) =>{
    heading.innerHTML = "Fetching Your Requests .. .. "
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData.value}`);
    let jsonData = await data.json();
    console.log(jsonData.meals);
    heading.innerHTML = "Best Dishes Ever"
    foodContainer.innerHTML =""
      
    jsonData.meals.forEach((meal) => {
      let divs = document.createElement("div");
       divs.classList.add("food-card");
       foodContainer.appendChild(divs);
        divs.innerHTML = ` <img src = "${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}  <span>Dish</span></p>
       <p>${meal.strTags}</p>


        `
        let button = document.createElement("button");
        // button.appendChild(divs);
        button.setAttribute("id" , "viewMore");
        button.innerHTML = "View More";
        divs.appendChild(button);
        button.addEventListener("click" , function () {
            showContent(meal)
        })
    
       
    })


  


    function showContent(meal) {
        contentText.innerHTML= `
        <h2>${meal.strMeal}</h2>
        <p>${meal.strInstructions}</p>
        `
      
    }
  
   
}


searchBtn.addEventListener("click", function(){
    renderFood(searchInput);
})
