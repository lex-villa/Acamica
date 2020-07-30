/** Elige un método de la documentación de la API de GitHub
y realiza una llamada más para mostrar la información por
pantalla.

*Si la documentación te resulta muy confusa, puedes ejecutar el siguiente
método para leer los repositorios de un usuario:
https://api.github.com/users/ + username + /repos */

const inputUser = document.getElementById('gitUser');
const btnSearch = document.getElementById('btn-search');

const getGitHubUser = (userName) => {
    const url = 'https://api.github.com/users/';
    const endpoint = `${url}${userName}/repos`;

    fetch(endpoint)
    .then(response => response.json())
    .then(json => {
        console.log(json);
    }). catch(err =>  console.log(err));
};

btnSearch.addEventListener('click', () => {
    const nameGitHubUser = inputUser.value;
    getGitHubUser(nameGitHubUser);
});