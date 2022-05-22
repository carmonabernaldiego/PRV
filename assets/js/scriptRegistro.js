const user = document.querySelector('#txtuser');
const email = document.querySelector('#txtemail');
const pass = document.querySelector('#txtpass');
const button = document.querySelector('#btnRegistro');

let registroUsuarios = [];

button.addEventListener('click', () => {
    let usuario = user.value;
    let correo = email.value;
    let password = pass.value;

    if (correo == '') {
        alert('Ingrese un correo, por favor.');
    } else if (usuario == '') {
        alert('Ingrese un usuario, por favor.');
    } else if (password == '') {
        alert('Ingrese una contraseña, por favor.');
    } else {
        registroUsuarios.push({ correo: correo, usuario: usuario, contrasena: password });

        document.querySelector('#txtuser').value = "";
        document.querySelector('#txtemail').focus();
        document.querySelector('#txtemail').value = "";
        document.querySelector('#txtpass').value = "";

        registroUsuarios.forEach(function(item) {
            console.log(item);
        });
    }
});