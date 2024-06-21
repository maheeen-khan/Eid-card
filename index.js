var myName = "maheen khan";

var userName = prompt("Enter your name : ");
var userNameCapitalize = "";


// Capitalize first letter of Full name
for(var i = 0; i < userName.length; i++){
    if(i == 0){
        userNameCapitalize += userName[i].toUpperCase();
    }
    else if (userName[i] === " "){
        userNameCapitalize += " ";
        i++;
        userNameCapitalize += userName[i].toUpperCase();
    }
    else{
        userNameCapitalize += userName[i];
    }
}


document.write("<div class='card text-center mx-auto mt-5 animate__animated animate__bounceInUp' style='width: 18rem;'>" + "<img src='image/eid.jpg' class='card-img-top' alt='Eid image'>" + "<div class='card-body'>" + "<h2 class='head'>" + "EID MUBARAK" + "</h2>" + "<p class='card-text'>" + "<p class = 'fst-italic userN'>" + userNameCapitalize + "</p>" + " from " + "<span class='name'>" + myName + "</span>"/* + "and her family."*/ + "<hr> <span class='bottom'>" + "May the guidance and blessings of Allah be with you and your family. " + "<span class='wish'>" + "Eid Mubarak!" + "</span></span> 🕌❤️" + "</p>" + "</div>" +  "</div>");