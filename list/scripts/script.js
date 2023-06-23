const list = document.querySelector('.favList');
const button = document.querySelector('.submitBtn');

button.addEventListener('click', function() {
    const input = document.querySelector('#favchap').value;

    // creates an li element and a delete button
    let listItem = document.createElement('li');
    let itemName = document.createElement('p');
    let deleteBtn = document.createElement('button');

    // Add a class name of chapName to the listItem
    listItem.setAttribute('class', 'chapName');

    // adds the item name & delete button to the list item
    listItem.appendChild(itemName);
    listItem.appendChild(deleteBtn);

    // fills the li element with the user's input & fills the delete button with the X emoji
    itemName.textContent = input;
    deleteBtn.innerHTML = '&#x274C';

    // adds the listItem to the favList <ul>
    list.appendChild(listItem);

    // empty the input element by setting its value to an empty string — ''
    document.querySelector('#favchap').value = '';

    // deletes the li element and its delete button when delete button is clicked
    deleteBtn.addEventListener('click', function(){
        listItem.remove();
    })

    // put the keyboard focus back onto the input window
    document.querySelector('#favchap').focus();
})