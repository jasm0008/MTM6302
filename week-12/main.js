const $users = document.getElementById('user-list')

// fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(json => {
//         displayUsers(json)

//       })


async function fetchData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    displayUsers(json)
  }

function displayUsers(users){
    const htmlTemplate = []
    for(const user of json){
        htmlTemplate.push(`<li>${user[user.name]}</li>`)
    }
    $users.innerHTML = htmlTemplate.join('')
}