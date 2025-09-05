// Change colour
document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Hello this text is changed "
})

// Highlight the text
document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.toggle("highlight");
})

// Change to Espresso
document.getElementById("changeOrder").addEventListener("click", function () {
    let change = document.getElementById("coffeeType")
    change.textContent = "Espresso";
    change.style.backgroundColor = "Brown";
    change.style.padding = "6px";
})

// Adding an element 
document.getElementById("addNewItem").addEventListener("click", function () {
    let newItem = document.createElement("li")
    newItem.textContent = ("Egg")
    document.getElementById("shoppingList").appendChild(newItem)
})

// Remove a element 
document.getElementById("removeLastTask").addEventListener("click", function () {
    let remove = document.getElementById("taskList");
    remove.lastElementChild.remove();
})

// Event handling
document.getElementById("clickMeButton").addEventListener("click", function () {
    alert("This is an Alert!")
})

// Event Delegation
document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert(`You have selected ${event.target.textContent}`)
    }
});

// Form Handling
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `Feedback: ${feedback}`; 
})

// DOM Loading
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM is loaded!";
})

// Change color
document.getElementById("toggleHighlight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})
