const user = document.querySelector('#txtuser');
const pass = document.querySelector('#txtpass');
const button = document.querySelector('#button');

let users = [{ user: 'admin', pass: 'root', nombre: 'Ernesto Valdivieso Pérez' }, { user: 'editor', pass: '1234', nombre: 'Carlos López López' }, { user: 'diego', pass: 'diego97', nombre: 'Diego Carmona Bernal' }];

button.addEventListener('click', () => {
    let usuario = user.value;
    let password = pass.value;
    let error = true;

    if (usuario == '') {
        alert('Ingrese usuario, por favor.');
    }
    if (password == '') {
        alert('Ingrese contraseña, por favor.');
    } else {
        for (let i = 0; i < users.length; i++) {
            if (usuario === users[i].user && password === users[i].pass) {
                localStorage.setItem("usuario", users[i].nombre);
                alert('¡Bienvenido ' + users[i].nombre + '!');
                error = false;

                window.location.href = "/";
                break;
            }
        }
        if (error) {
            alert('¡Datos incorrectos!');
        }
    }
});