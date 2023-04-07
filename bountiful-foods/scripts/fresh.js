const fruiturl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let recipeCount = Number(localStorage.getItem("recipeCount"));
// console.log(`recipeCount: ${recipeCount}`);

async function getfruitData () {
    const response = await fetch(fruiturl);
    const data = await response.json();
	const fruitSelector = document.querySelectorAll('.fruitDropDown');
	fruitSelector.forEach(item =>{
		data.forEach(fruit => {
			let dropdown = document.createElement('option');
			dropdown.value = fruit.name;
			dropdown.textContent = fruit.name;
			item.appendChild(dropdown);
		});
	});
	const formSubmit = document.getElementById('juiceForm');
	formSubmit.addEventListener('submit', (event) => {
		event.preventDefault();
		const firstName = document.getElementById('fname').value;
		const email = document.getElementById('email').value;
		const phoneNumber = document.getElementById('phone').value;
		const fruit1 = document.getElementById('fruit1').value;
		const fruit2 = document.getElementById('fruit2').value;
		const fruit3 = document.getElementById('fruit3').value;
		const instructions = document.getElementById('specialInstructions').value;

		// console.log(`fruit1: ${fruit1}`);
		// console.log(`fruit2: ${fruit2}`);
		// console.log(`fruit3: ${fruit3}`);
		
		const fruitGroup = [fruit1, fruit2, fruit3];		
		const fruitList = data.filter(item => fruitGroup.includes(item.name));
		// console.log(fruitList);
		// console.table(fruitList);
		
		const calories = fruitList.reduce((sum, item) => sum + item.nutritions.calories, 0);
		const carbs = fruitList.reduce((sum, item) => sum = item.nutritions.carbohydrates, 0);
		const fat = fruitList.reduce((sum, item) => sum = item.nutritions.fat, 0);
		const protein = fruitList.reduce((sum, item) => sum = item.nutritions.protein, 0);
		const sugar = fruitList.reduce((sum, item) => sum = item.nutritions.sugar, 0);

		localStorage.setItem('recipeCount', (recipeCount + 1));
		// console.log(`recipeCount: ${recipeCount}`);
		
		const recipeInfo = document.getElementById('recipeInfo');
		const nutritionInfo = document.getElementById('nutritionInfo')
		
		let recipeTitleElement = document.createElement('h2');
		let nameElement = document.createElement('p');
		let emailElement = document.createElement('p');
		let phoneElement = document.createElement('p');
		let fruit1Element = document.createElement('p');
		let fruit2Element = document.createElement('p');
		let fruit3Element = document.createElement('p');
		let instructionsElement = document.createElement('p');

		let = nutritionTitleElement = document.createElement('h2');
		let = caloriesElement = document.createElement('p');
		let = carbsElement = document.createElement('p');
		let = fatElement = document.createElement('p');
		let = proteinElement = document.createElement('p');
		let = sugarElement = document.createElement('p');

		recipeTitleElement.innerHTML = `Your Recipe`
		nameElement.innerHTML = `Name: ${firstName}`;
		emailElement.innerHTML = `Email: ${email}`;
		phoneElement.innerHTML = `Phone: ${phoneNumber}`;
		fruit1Element.innerHTML = `Fruit 1: ${fruit1}`;
		fruit2Element.innerHTML = `Fruit 2: ${fruit2}`;
		fruit3Element.innerHTML = `Fruit 3: ${fruit3}`;
		instructionsElement.innerHTML = `Special Instructions: <br>${instructions}`;

		nutritionTitleElement.innerHTML = `Nutrition`;
		caloriesElement.innerHTML = `Calories: ${calories}`;
		carbsElement.innerHTML = `Carbohydrates: ${carbs}`;
		fatElement.innerHTML = `Fat: ${fat}`;
		proteinElement.innerHTML = `Protein: ${protein}`;
		sugarElement.innerHTML = `Sugar: ${sugar}`; 

		recipeInfo.appendChild(recipeTitleElement);
		recipeInfo.appendChild(nameElement);
		recipeInfo.appendChild(emailElement);
		recipeInfo.appendChild(phoneElement);
		recipeInfo.appendChild(fruit1Element);
		recipeInfo.appendChild(fruit2Element);
		recipeInfo.appendChild(fruit3Element);
		recipeInfo.appendChild(instructionsElement);

		nutritionInfo.appendChild(nutritionTitleElement);
		nutritionInfo.appendChild(caloriesElement);
		nutritionInfo.appendChild(carbsElement);
		nutritionInfo.appendChild(fatElement);
		nutritionInfo.appendChild(proteinElement);
		nutritionInfo.appendChild(sugarElement);
	});
}

getfruitData();