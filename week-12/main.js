const $users = document.getElementById('user-list')

// fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(json => {
//         displayUsers(json)

//       })


async function fetchData () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=2&limit=2')
    const json = await response.json()
    displayUsers(json.results)
  }

  fetchData()

// function displayUsers(pokemons){
//     const htmlTemplate = []
//     for(const pokemon of pokemons){
//         htmlTemplate.push(`<li>${pokemon.name}</li>`)
//     }
//     $users.innerHTML = htmlTemplate.join('')
// }

function displayUsers(users){
    const htmlTemplate = []
    for(const user of users){
        htmlTemplate.push(`<li>${user.name}</li>`)
    }
    $users.innerHTML = htmlTemplate.join('')
}