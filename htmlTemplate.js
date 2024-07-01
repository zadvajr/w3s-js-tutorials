//You can also use template literal to create html template at the front end dynamically
const itemName = "Smartphone";

const itemDescription = "The latest model with the latest features";

const htmlTemplate = `
    <div class="item">
        <h2>${itemName}</h2>
        <p>${itemDescription}</p>
    </div>
`;

console.log(htmlTemplate);