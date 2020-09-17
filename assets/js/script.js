//funcion para mostar la paleta de temas
const showDivThemes = () => {
    const divTheme2 = document.querySelectorAll('.contTheme');
    for (let i = 0; i < divTheme2.length; i++) {
        divTheme2[i].addEventListener('mouseenter', () => {
            divTheme.classList.add('show');
            divTheme.classList.remove('hide');
            textTheme.classList.add('hide');
            console.log(divTheme.classList);
        });
    }
    for (let i = 0; i < divTheme2.length; i++) {
        divTheme2[i].addEventListener('mouseleave', () => {
            divTheme.classList.add('hide');
            divTheme.classList.remove('show');
            textTheme.classList.remove('hide');
            console.log(divTheme.classList);
        });
    }

}
// funcion para obtener el nombre del tema y realizar segun el caso el cambio de la clase
const themeContainer = document.getElementById('container');
let getTheme = (theme) => {
    switch (theme) {
        case 'dark':
            themeContainer.className = "container dark";
            setThemeStorage(themeContainer.classList[1]);
            break;
        case 'light':
            themeContainer.className = "container light";
            setThemeStorage(themeContainer.classList[1]);
            break;
        case 'pink':
            themeContainer.className = "container pink";
            setThemeStorage(themeContainer.classList[1]);
            break;
        case 'premium':
            themeContainer.className = "container premium";
            setThemeStorage(themeContainer.classList[1]);
            break;

    }
}
//recibe el valor del tema para guardarlo en el localstorage
let setThemeStorage = (themeSaved) => {
    localStorage.setItem("theme", themeSaved);
}
//al cargar la pagina captura el valor del tema del localstorage y se muestra en la pagina
let getThemeStorage = () => {
    const savedTheme = localStorage.getItem('theme');
    getTheme(savedTheme);
}
showDivThemes();
getThemeStorage();