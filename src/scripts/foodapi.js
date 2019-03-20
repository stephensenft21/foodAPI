 const buildString = (insertMe) => {
     return `<div class="spacing">
       <h1 class="head">${insertMe.name}</h1> 
        <p>${insertMe.category}</p>
        <p>${insertMe.ethnicity}</p>
        </div>
           `
 }
 const render = (item) => {
     let foodLog = document.querySelector(".foodlist")
     foodLog.innerHTML += buildString(item);

 }

 fetch("http://localhost:8088/food")
     .then(foods => foods.json())
     .then(parsedFoods => {

         parsedFoods.forEach(food => {


             render(food)

         })

         console.table(parsedFoods)
     })