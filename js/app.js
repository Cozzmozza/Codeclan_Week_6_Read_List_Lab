document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', formSubmit);

})

const formSubmit = function(event){
  event.preventDefault();

  // Grabs the inputs from the form
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  // Creates a ul, within the html ul
  const mainList = document.createElement('ul')

  // Making an li for each of our three inputs
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  
  // Filling in each li with the inputs
  listItem1.textContent = `${title}`;
  listItem2.textContent = `${author}`;
  listItem3.textContent = `${category}`;
  
  // Adding each li to our artificial ul
  mainList.appendChild(listItem1);
  mainList.appendChild(listItem2);
  mainList.appendChild(listItem3);

  // Adding our artificial ul to the main reading-list ul in the html
  const createList = document.querySelector('#reading-list');
  createList.appendChild(mainList);
  
  event.target.reset();
}