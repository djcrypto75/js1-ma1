// question 1
const cat = {
   complain: function() {
      console.log("Meow!");
   }
};

// question 2
const heading = document.querySelector("h3");

// question 3
const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

// question 4
const heading = document.querySelector("h3");
heading.classList.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");

// question 6
const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7
function catNames(catArray) {
   for (let i = 0; i < catArray.length; i++) {
      console.log(catArray[i].name);
   }
}
catNames(cats);

// question 8
function catNames(catArray) {
   let catHTML = "";
   for (let i = 0; i < catArray.length; i++) {
      catHTML += `<h5>${catArray[i].name}</h5>`;
   }
   console.log(catHTML);

   return catHTML;
}

// question 9
resultsContainer.innerHTML = catNames(cats);

// question 10
const container = document.querySelector(".container");
let catHTML = "";

for (let i = 0; i < cats.length; i++) {
   let catAge = "Age unknown";
   if (cats[i].age) {
      catAge = cats[i].age;
   }
   const catDetails = `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${catAge}</p>
                    </div>`;
   catHTML += catDetails;
}
container.innerHTML = catHTML;

function catNames(catArray) {
   let catHTML = "";
   for (let i = 0; i < catArray.length; i++) {
      catHTML += `<h5>${catArray[i].name}</h5>`;
   }
   return catHTML;
}
