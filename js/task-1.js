const liElem = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${liElem.length}`);
const h2Elem = document.querySelectorAll('li> h2');
h2Elem.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});
const ulElem = document.querySelectorAll('li>ul');
ulElem.forEach(el => {
  console.log(`Elements:${el.childElementCount}`);
});