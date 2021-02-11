const elementsList = document.querySelectorAll("#string-1, #string-2,#string-3,#string-4,#string-5,#string-6");
const elementsArray = [...elementsList];

// Now you can use cool array prototypes
elementsArray.forEach(element => {
    console.log(element);
});