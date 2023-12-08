
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let foodContainer = document.querySelector(".food-container");
let renderFood = async(searchData) =>{
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData.value}`);
    let jsonData = await data.json();
    console.log(jsonData.meals[0].strMealThumb);

    jsonData.meals.forEach((meal) =>{
        let divs = document.createElement("divs");
        divs.classList.add("food-card");
     
       
        foodContainer.appendChild(divs);
        divs.innerHTML = ` <img src = "${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}  <span>Dish</span></p>
       <p>${meal.strTags}</p>


        `
       
    })
   
}


searchBtn.addEventListener("click", function(){
    renderFood(searchInput);
})
