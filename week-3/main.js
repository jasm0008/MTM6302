//create the blog data
const contegories = [
 'World',
 'Candada', 
 'Technology', 
 'Design'
]

// this is an array
const blogs = [
    {
        category: 'World',
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    },

    {
        category: 'Design',
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    }
]

/*** DOM ***/


console.log(document.links)

/*** Finding HTML Elements ***/
//Select element by ID.
const $main = document.getElementById('main')
console.log( $main )


//Select element by any CSS selector
const $canadaCategory = document.querySelector('nav a:nth-child(2)')
console.log( $canadaCategory )

const $categories = document.querySelectorAll('nav a')
console.log( $categories )

//practice CSS selectors
console.log( document.querySelectorAll('[href^="https"]') )
console.log( document.querySelectorAll('[href^="cdn"]') )

/*** Traversing the DOM  ***/
console.log( $main.children )
console.log( $main.childNodes )
console.log( $main.firstElementChild ) 
console.log( $main.nextElementSibling )

/*** Manipulating attributes */
//getAttribute()
//Obtain the id of the main element
console.log( $main.getAttribute('id') )
console.log( $main.id)

//exception calling attributes as properties
console.log( $main.className )
console.log( $main.style);
console.log( $main.getAttribute('style'));
console.log(typeof $main.getAttribute('style'));

//setAttribute
//create the id jumbotron; first div element of main
$main.firstElementChild.setAttribute('id','jumbotron')
const $jumbotron = document.getElementById('jumbotron')

//Add  'text-bg-dark' class to the element with id jumbotron; warning!
// $jumbotron.setAttribute('class', 'text-bg-dark')
// $jumbotron.setAttribute()

//Add the href attribute to the 'continue reading...' link from jumbotron; https://imdac.github.io/mtm6302/
const $jumbotronLink = document.querySelector('main a')
console.log($jumbotronLink)
$jumbotronLink.setAttribute('href','https://imdac.github.io/mtm6302/')

element.setAttribute('target', '_blank');
console.log(element.getAttribute('class')); // text-white fw-bold
console.log(element.getAttribute('href')); // https://imdac.github.io/mtm6302/
console.log(element.getAttribute('target')); // _blank

//Remove
//Remove the attribute 'target' from the 'continue reading...' link
console.log(element.getAttribute('target')); // null 



/*** Manipulating classes ***/
console.log( $jumbotron.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' o the element with id jumbotron
$jumbotron.classList.add('text-bg-dark')
console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]

// Remove class
$jumbotron.classList.remove('text-bg-dark')
// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]

// // Toggle class
// //obtain the 'dark mode' button, and save it to $darkModeBtn const
// const $darkModeBtn = document.getElementById('darkModeBtn')
// $darkModeBtn.addEventListener('click', function() {
//     //toggle class here
//     $jumbotron.classList.toggle('text-bg-dark')


// })

//contains() and boolean condition
console.log(element.classList.contains('position-relative')) // true
console.log(element.classList.contains('text-bg-dark'))      // false
const i = 0;
const condition = i > 0;
element.classList.toggle('text-bg-dark', condition) //Toggle class
console.log($jumbotron.classList) // ?

const $links = document.querySelectorAll('nav a')

console.log( $links.textContent = categories[3])

const $title = document.getElementById('title')
$title.textContent = blogs[0].title

console.log( $main.innerHTML )


