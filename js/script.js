const body = document.body;



body.querySelector('.create').addEventListener("click", () => {

    let ListUser = []
    localStorage.setItem('users', ListUser);


    // // JSON a guardar
    // var miJSON = {
    //     nombre: 'Juan',
    //     edad: 30
    // };
    // // Serializar el JSON a una cadena
    // var miJSONString = JSON.stringify(miJSON);


});
body.querySelector('.get').addEventListener("click", () => {
    // Para recuperar el JSON del localStorage
    var miJSONRecuperado = JSON.parse(localStorage.getItem('users'));
    console.log(miJSONRecuperado);
});
body.querySelector('.delete').addEventListener("click", () => {
    localStorage.removeItem("user")
});