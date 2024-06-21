var n = prompt("Enter your name : ");

// n = n.toUpperCase();
var userNameCapitalize = "";

for(var i = 0; i < n.length; i++){
    if(i == 0){
        userNameCapitalize += n[i].toUpperCase();
    }
    else if (n[i-1] === " "){
       
        userNameCapitalize += n[i].toUpperCase();
    }
    else{
        userNameCapitalize += n[i];
    }
}
document.write("<div class='card text-center mx-auto mt-5 animate__animated animate__bounceInUp' style='width: 18rem;'>" + "<img src='image/eid.jpg' class='card-img-top' alt='Eid image'>" + "<div class='card-body'>" + "<h2 class='head'>" + "EID MUBARAK" + "</h2>" + "<p class='card-text'>" + userNameCapitalize + "<br>" + " from " + "<span class='name'>" + "maheen khan " + "</span>" + "and her family." + "<hr> <span class='bottom'>" + "May the guidance and blessings of Allah be with you and your family. " + "<span class='wish'>" + "Eid Mubarak!" + "</span></span> 🕌❤️" + "</p>" + "</div>" +  "</div>");