/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
    let number = document.querySelector('#list-number').value;

    // Append the number to our array.
    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.
    
    //My Codes

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    if(isNaN(number)  || number===''){
        resetInput();
    }
    
    else{
        // Now comes your part: add the item to the list.
        addToUL(number);
        numbers.push(number);
    }
    console.log(numbers);

    // Update our html.

}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index in the list from which we'll remove.
    let index = document.querySelector('#number-list').value;

    // Remove the number at that index from the list.
    for(let i = 0; i < index.length; i++) {
        index.pop(index);
    }

    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    // Update our html.
}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.
    numbers = [];
    // Update our html.
    console.log(numbers);
    updateUL();
}

//My codes
function resetInput() {
    // Resets input field to blank.
    document.querySelector('#list-number').value = '';
}

/*
# ========================================================
# = Math Section
# ========================================================
*/

function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.

    let numberToAdd = document.querySelector('#numberForMath').value;

    if(isNaN(numberToAdd)  || numberToAdd===''){
        resetInput();
    }
    
    else{
        
    

    // Add value to everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) + parseFloat(numberToAdd);
    }
}  
    // Update our html.
    console.log(numbers);
    updateUL();
}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to subtract.
    let numberToSubtract = document.querySelector('#numberForMath').value;
    

    if(isNaN(numberToSubtract)  || numberToSubtract===''){
        resetInput();
    }
    
    else{
        
    // Subtract value to everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) - parseFloat(numberToSubtract);
    }
    }
    // Update our html.
    console.log(numbers);
    updateUL();
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to multiply.
    let numberToMultiply = document.querySelector('#numberForMath').value;

    if(isNaN(numberToMultiply)  || numberToMultiply===''){
        resetInput();
    }
    
    else{
        
    
    // Grab value to Multiply.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) * parseFloat(numberToMultiply);
    }
    }
    // Update our html.
    console.log(numbers);
    updateUL();
    
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to divide.
    let numberToDivide = document.querySelector('#numberForMath').value;

    // Divide value from everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) / parseFloat(numberToDivide);
    }

    // Update our html.
    console.log(numbers);
    updateUL();
    
}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#number-list');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const UL = document.querySelector('#number-list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    UL.appendChild(newLI);
}