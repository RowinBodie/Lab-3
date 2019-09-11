
var i = 1;// de tafel opgaven van lab-3 punt 1,2.
var tafel = prompt("welke tafel? (getal aub)");
for (i ==1;i < 11; i++){
	document.write(tafel+"x"+i+"="+(tafel*i)+"<br>");
}

var cijfer = 12;// de reken opgaven van lab-3 punt 3.
cijfer += 6
cijfer *= 10
cijfer /= 5
cijfer -= 12
document.write(cijfer+"<br>");

var getal = prompt("vul hier uw getal in voor de som");// de reken opgaven van lab-3 punt 4.
getal += 6      // voegd het getal aan de achterkant van het ingevoerde getal.
getal *= 10
getal /= 5
getal -= 12
getal /= 10     // heb ik er extra bij gedaan omdat het anders een 0 achter elk antwoord kwam.
document.write(getal);