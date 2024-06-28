// Variables globales
const body = document.body;
let ListUser;
let ActiveUser = null;

// ----------------------------------------------
// Leyendo datos iniciales de " localStorage "
// ----------------------------------------------
if (localStorage.getItem("users") == null) {
    // Guardar datos y estructura del localStorage
    localStorage.setItem('users', JSON.stringify({ "ListUser": [], ActiveUser: null }));
}
// Para recuperar el JSON del localStorage
ListUser = JSON.parse(localStorage.getItem('users')).ListUser;
ActiveUser = JSON.parse(localStorage.getItem('users')).ActiveUser;



try {
    body.querySelector('.sign-in').addEventListener("click", () => {
        const saveUser = {
            user: document.getElementById("InputUser").value,
            password: document.getElementById("InputPassword").value
        };

        // Validardor de credenciales del formulario
        if (saveUser.user == "") {
            document.getElementById("InputUser").classList.add("is-invalid");
            return null;
        } else {
            document.getElementById("InputUser").classList.remove("is-invalid");
        }
        if (saveUser.password == "") {
            document.getElementById("InputPassword").classList.add("is-invalid");
            return null;
        } else {
            document.getElementById("InputPassword").classList.remove("is-invalid");
        }
        // Comprobar si exite el usuario a registrar
        for (let i = 0; i < ListUser.length; i++) {
            if (ListUser[i].user == saveUser.user &&
                ListUser[i].password == saveUser.password) {
                localStorage.setItem('users', JSON.stringify({
                    "ListUser": ListUser,
                    "ActiveUser": {
                        user: ListUser[i].user,
                        fullname: ListUser[i].fullname,
                        mail: ListUser[i].mail,
                        listReserv: ListUser[i].listReserv
                    }
                }));
                window.location.href = "pages/reservacion.html";
            } else {
                body.querySelector('.sign-in').classList.add("is-invalid");
            }

        }
    });
} catch (error) {

}



try {
    // Acciones del boton de autentificacion
    body.querySelector('.sign-up').addEventListener("click", () => {
        // Leyendo los datos de los formulario de autentificacion
        const saveUser = {
            user: document.getElementById("InputUser").value,
            password: document.getElementById("InputPassword").value,
            fullname: document.getElementById("InputFullName").value,
            mail: document.getElementById("InputMail").value,
            listReserv: []
        };
        // Añadiendolo a la lista de usuarios de localStorage
        AnadirListaDeUsuario(saveUser);
        window.location.href = "../index.html";
    });
} catch (error) {

}




// Funciones a utilizar
function AnadirListaDeUsuario(saveUser) {
    // Guardando el nuevo usuario en la lista
    ListUser.push(saveUser);
    // Salvando la lista en localStorage
    localStorage.setItem('users', JSON.stringify({ "ListUser": ListUser, "ActiveUser": ActiveUser }));
}



try {
    body.querySelector('.delete').addEventListener("click", () => {
        localStorage.removeItem("users")
    });
} catch (error) {

}