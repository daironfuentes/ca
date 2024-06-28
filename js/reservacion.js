// Variables globales
const body = document.body;
let ListUser;
let ActiveUser = null;
let listReserv = createReservacion();
let flightNumber = null;

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



// Validando el usuario
if (ActiveUser == null) {
    window.location.href = "../index.html";
}

// Escribiendo datos de los usuario a la vista 
try {
    body.querySelector(".SwohFullName").innerHTML = ActiveUser.fullname;
    body.querySelector(".SwohMail").innerHTML = ActiveUser.mail;
} catch (error) {

}

// Mostrar datos de las reservaciones
let show = ""
for (let i = 0; i < listReserv.length; i++) {
    show += "<tr> <th scope=\"row\">" + listReserv[i].flightNumber + "</th>" +
        "<td>" + listReserv[i].origin + "</td>" +
        "<td>" + listReserv[i].destination + "</td>" +
        "<td> $ " + listReserv[i].price + "0.00 </td>" +
        "<td> </td>"
    if (indexOfFlightNumber(listReserv[i].flightNumber)) {
        show += "<td class=\"d-flex\"><button class=\"m-auto btn btn-outline-primary book-flight w-100\"" +
            "flightNumber=\"" + listReserv[i].flightNumber + "\"" +
            "data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasTop\">Reservar vuelo </button></td>"
    } else {
        show += "<td>Ya esta reservado</td>"

    }
    show += "</tr>";
}
body.querySelector(".ShowReserv").innerHTML = show;


function indexOfFlightNumber(fn) {
    let la;
    for (let i = 0; i < ListUser.length; i++) {
        if (ListUser[i].user == ActiveUser.user)
            la = ListUser[i].listReserv
    }
    for (let x = 0; x < la.length; x++) {
        if (la[x] == fn) {
            return false;
        }

    }
    return true;
}

document.body.querySelectorAll(".book-flight").forEach(element => {
    element.addEventListener("click", () => {

        flightNumber = element.getAttribute("flightNumber");
        body.querySelector(".flightNumber").innerHTML = flightNumber;

        listReserv.forEach(element => {
            if (element.flightNumber == flightNumber) {
                body.querySelector(".origin").innerHTML = element.origin;
                body.querySelector(".destination").innerHTML = element.destination;
                body.querySelector(".price").innerHTML = element.price;

            }
        });

    });
});
document.getElementById("BookFlight").addEventListener("click", () => {
    for (let i = 0; i < ListUser.length; i++) {
        if (ListUser[i].user == ActiveUser.user)
            ListUser[i].listReserv.push(flightNumber);
    }
    localStorage.setItem('users', JSON.stringify({ "ListUser": ListUser, "ActiveUser": ActiveUser }));
    body.querySelector(".IdN88DE275").click()
});




document.getElementById("CloseSign").addEventListener("click", () => {
    localStorage.setItem('users', JSON.stringify({ "ListUser": ListUser, "ActiveUser": null }));
});


function createReservacion() {
    return [{
            "flightNumber": "AA123",
            "origin": "La Habana",
            "destination": "Santiago de Cuba",
            "price": 200
        },
        {
            "flightNumber": "BB456",
            "origin": "Pinar del Río",
            "destination": "Holguín",
            "price": 180
        },
        {
            "flightNumber": "CC789",
            "origin": "Matanzas",
            "destination": "Cienfuegos",
            "price": 150
        },
        {
            "flightNumber": "DD321",
            "origin": "Camagüey",
            "destination": "Villa Clara",
            "price": 210
        },
        {
            "flightNumber": "EE654",
            "origin": "Granma",
            "destination": "Isla de la Juventud",
            "price": 190
        },
        {
            "flightNumber": "FF987",
            "origin": "Las Tunas",
            "destination": "Guantánamo",
            "price": 220
        },
        {
            "flightNumber": "GG654",
            "origin": "Artemisa",
            "destination": "Mayabeque",
            "price": 170
        },
        {
            "flightNumber": "HH321",
            "origin": "Pinar del Río",
            "destination": "Camagüey",
            "price": 240
        },
        {
            "flightNumber": "II753",
            "origin": "Santiago de Cuba",
            "destination": "Holguín",
            "price": 185
        },
        {
            "flightNumber": "JJ237",
            "origin": "Villa Clara",
            "destination": "Las Tunas",
            "price": 195
        },
        {
            "flightNumber": "KK987",
            "origin": "Matanzas",
            "destination": "Ciego de Ávila",
            "price": 175
        },
        {
            "flightNumber": "LL456",
            "origin": "Sancti Spíritus",
            "destination": "Artemisa",
            "price": 220
        },
        {
            "flightNumber": "MM789",
            "origin": "Camagüey",
            "destination": "Isla de la Juventud",
            "price": 230
        },
        {
            "flightNumber": "NN321",
            "origin": "Las Tunas",
            "destination": "Villa Clara",
            "price": 200
        },
        {
            "flightNumber": "OO654",
            "origin": "Holguín",
            "destination": "Santiago de Cuba",
            "price": 190
        },
        {
            "flightNumber": "PP987",
            "origin": "Cienfuegos",
            "destination": "Ciego de Ávila",
            "price": 205
        },
        {
            "flightNumber": "QQ654",
            "origin": "Mayabeque",
            "destination": "Sancti Spíritus",
            "price": 180
        },
        {
            "flightNumber": "RR321",
            "origin": "Isla de la Juventud",
            "destination": "Granma",
            "price": 210
        },
        {
            "flightNumber": "SS753",
            "origin": "Guantánamo",
            "destination": "Pinar del Río",
            "price": 225
        },
        {
            "flightNumber": "TT237",
            "origin": "Ciego de Ávila",
            "destination": "Santiago de Cuba",
            "price": 195
        },
        {
            "flightNumber": "UU987",
            "origin": "Artemisa",
            "destination": "Cienfuegos",
            "price": 175
        },
        {
            "flightNumber": "VV456",
            "origin": "Las Tunas",
            "destination": "Sancti Spíritus",
            "price": 190
        },
        {
            "flightNumber": "WW789",
            "origin": "Camagüey",
            "destination": "Holguín",
            "price": 200
        },
        {
            "flightNumber": "XX321",
            "origin": "Villa Clara",
            "destination": "Isla de la Juventud",
            "price": 210
        },
        {
            "flightNumber": "YY654",
            "origin": "Santiago de Cuba",
            "destination": "Ciego de Ávila",
            "price": 220
        },
        {
            "flightNumber": "ZZ987",
            "origin": "Holguín",
            "destination": "Pinar del Río",
            "price": 190
        },
        {
            "flightNumber": "AA654",
            "origin": "Ciego de Ávila",
            "destination": "Matanzas",
            "price": 195
        },
        {
            "flightNumber": "BB321",
            "origin": "Santiago de Cuba",
            "destination": "Villa Clara",
            "price": 205
        },
        {
            "flightNumber": "CC753",
            "origin": "Holguín",
            "destination": "Camagüey",
            "price": 210
        },
        {
            "flightNumber": "DD237",
            "origin": "Matanzas",
            "destination": "Las Tunas",
            "price": 195
        },
        {
            "flightNumber": "EE987",
            "origin": "Cienfuegos",
            "destination": "Santiago de Cuba",
            "price": 200
        },
        {
            "flightNumber": "FF456",
            "origin": "Mayabeque",
            "destination": "Granma",
            "price": 220
        },
        {
            "flightNumber": "GG789",
            "origin": "Sancti Spíritus",
            "destination": "Artemisa",
            "price": 180
        },
        {
            "flightNumber": "HH321",
            "origin": "Isla de la Juventud",
            "destination": "La Habana",
            "price": 230
        },
        {
            "flightNumber": "II654",
            "origin": "Granma",
            "destination": "Guantánamo",
            "price": 210
        },
        {
            "flightNumber": "JJ987",
            "origin": "Pinar del Río",
            "destination": "Mayabeque",
            "price": 185
        },
        {
            "flightNumber": "KK456",
            "origin": "Ciego de Ávila",
            "destination": "Santiago de Cuba",
            "price": 220
        },
        {
            "flightNumber": "LL789",
            "origin": "Camagüey",
            "destination": "Holguín",
            "price": 200
        },
        {
            "flightNumber": "MM321",
            "origin": "Villa Clara",
            "destination": "Isla de la Juventud",
            "price": 210
        },
        {
            "flightNumber": "NN753",
            "origin": "Santiago de Cuba",
            "destination": "Ciego de Ávila",
            "price": 220
        },
        {
            "flightNumber": "OO237",
            "origin": "Holguín",
            "destination": "Pinar del Río",
            "price": 190
        }
    ]
}