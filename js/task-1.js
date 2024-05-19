const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelector('item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
    
    const categoryTitle = category.querySelector('h2').text - Content;

    const categoryElements = category.querySelector('ul li');


    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});