// DEFINING HOTELS
var hoteles = {
    "hotel 1": {
        name: "Hotel 1",
        location: "Ubicación 1",
        img: "images/hotel1.webp",
    },
    "hotel 2": {
        name: "Hotel 2",
        location: "Ubicación 2",
        img: "images/hotel2.jpg",
    },
    "hotel 3": {
        name: "Hotel 3",
        location: "Ubicación 3",
        img: "images/hotel3.jpg",
    }
};

//SHOW HOTEL
var hotelSelected = prompt("Introduce el nombre del hotel: hotel 1, hotel 2, hotel 3");

document.getElementById("name-hotel").innerHTML = hoteles[hotelSelected].name;
document.getElementById("location-hotel").innerHTML = hoteles[hotelSelected].location;
document.getElementById("img-hotel").src = hoteles[hotelSelected].img;

//SHOW RATING
var stars = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("rating").innerHTML = stars[rating];
document.getElementById("anonymous").checked = anonymous;