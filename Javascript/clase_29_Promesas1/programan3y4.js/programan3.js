/** Reutiliza tu función
Crea un HTML con un input de texto + un botón de buscar.
Captura el texto cuando presionan el botón y haz una
búsqueda en Github del usuario.
- Si el usuario existe, muestra los datos por pantalla.
- Si el usuario no existe, muestra un mensaje de error. */


const inputUser = document.getElementById('gitUser');
const btnSearch = document.getElementById('btn-search');

const getGitHubUser = (userName) => {
    const url = 'https://api.github.com/users/';
    const endpoint = `${url}${userName}`;

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