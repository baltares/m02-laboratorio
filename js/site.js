// DEFINING HOTEL
var hotel = {
    name: "Hotel 1",
    location: "Ubicación 1",
    img: "images/hotel1.webp",
};

document.getElementById("name-hotel").innerHTML = hotel.name;
document.getElementById("location-hotel").innerHTML = hotel.location;
document.getElementById("img-hotel").src = hotel.img;

// SHOW RATING
var rating = prompt("Puntuación: del 1 al 5");
var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("rating").innerHTML = rating + " estrellas";
document.getElementById("anonymous").checked = anonymous;