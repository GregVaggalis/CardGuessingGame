/*
Name: Greg Vaggalis 
*/

var cardAry = ['/Cards/Cake.png', '/Cards/MeterPata.png', '/Cards/NoProb.png', '/Cards/Ojo.png', '/Cards/Ponerse.png', '/Cards/Realize.png', '/Cards/Salud.png', '/Cards/UnGusto.png', '/Cards/Worth.png'];

var newCards = [];

var idArry = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6'];

var id2Arry = ['pic7', 'pic8', 'pic9', 'pic10', 'pic11', 'pic12'];

var compArry = [];

var x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12;

var counter = 0;

window.addEventListener("load", loadGameBd);

function loadGameBd() {
    // for the top and bottom rows
    for ( var i = 1; i <= 4; i++) {
        document.getElementById('row1').innerHTML += "<div class=col>" + "<img class='back' id='" + idArry[i-1] + "' src='cardBack.jpg'>" +  "<img class='front' id='" + i + "' src='cardBack.jpg'>" + "</div>";

        document.getElementById('row3').innerHTML += "<div class=col>" + "<img class='back' id='" + id2Arry[i+1] + "' src='cardBack.jpg'>" + "<img class='front' id='" + (i+8) + "' src='cardBack.jpg'>" + "</div>";
    }
    // next two for loops control middle
    for (var i = 1; i < 3; i++) {
        document.getElementById('row2').innerHTML += "<div class=col>" + "<img class='back' id='" + idArry[i+3] + "' src='cardBack.jpg'>" + "<img class='front' id='" + (i+4) + "' src='cardBack.jpg'>" + "</div>";
    }
    for (var i = 1; i < 3; i++) {
        document.getElementById('row2').innerHTML += "<div class=col>" + "<img class='back' id='" + id2Arry[i-1] + "' src='cardBack.jpg'>" + "<img class='front' id='" + (i+6) + "' src='cardBack.jpg'>" + "</div>";
    }
    //12 variables for the click event for the cards
    x1 =  document.getElementById('1').addEventListener("click", function() {
        document.getElementById('1').style.zIndex = "0";
        document.getElementById("pic1").style.zIndex = "1";
        compfunc(1);
    })
    x2 =  document.getElementById('2').addEventListener("click", function() {
        document.getElementById('2').style.zIndex = "0";
        document.getElementById("pic2").style.zIndex = "1";
        compfunc(2);
    })
    x3 =  document.getElementById('3').addEventListener("click", function() {
        document.getElementById('3').style.zIndex = "0";
        document.getElementById("pic3").style.zIndex = "1";
        compfunc(3);
    })
    x4 =  document.getElementById('4').addEventListener("click", function() {
        document.getElementById('4').style.zIndex = "0";
        document.getElementById("pic4").style.zIndex = "1";
        compfunc(4);
    })
    x5 =  document.getElementById('5').addEventListener("click", function() {
        document.getElementById('5').style.zIndex = "0";
        document.getElementById("pic5").style.zIndex = "1";
        compfunc(5);
    })
    x6 =  document.getElementById('6').addEventListener("click", function() {
        document.getElementById('6').style.zIndex = "0";
        document.getElementById("pic6").style.zIndex = "1";
        compfunc(6);
    })  
    x7 =  document.getElementById('7').addEventListener("click", function() {
        document.getElementById('7').style.zIndex = "0";
        document.getElementById("pic7").style.zIndex = "1";
        compfunc(7);
    })  
    x8 =  document.getElementById('8').addEventListener("click", function() {
        document.getElementById('8').style.zIndex = "0";
        document.getElementById("pic8").style.zIndex = "1";
        compfunc(8);
    })
    x9 =  document.getElementById('9').addEventListener("click", function() {
        document.getElementById('9').style.zIndex = "0";
        document.getElementById("pic9").style.zIndex = "1";
        compfunc(9);
    })
    x10 =  document.getElementById('10').addEventListener("click", function() {
        document.getElementById('10').style.zIndex = "0";
        document.getElementById("pic10").style.zIndex = "1";
        compfunc(10);
    })
    x11 =  document.getElementById('11').addEventListener("click", function() {
        document.getElementById('11').style.zIndex = "0";
        document.getElementById("pic11").style.zIndex = "1";
        compfunc(11);
    })
    x12 =  document.getElementById('12').addEventListener("click", function() {
        document.getElementById('12').style.zIndex = "0";
        document.getElementById("pic12").style.zIndex = "1";
        compfunc(12);
    })

    
}

for (var i = 0; i < 6; i++) {
    // sets up newCards with random selection
    var num = Math.floor(Math.random() * (cardAry.length));
    newCards.push(cardAry[num]);
    cardAry.splice(num, 1);
}

function compfunc (i) {
    
    compArry.push(i);
    //checks for two items in the array
    if (compArry.length == 2) {
        if (document.getElementById('pic' + compArry[0]).src == document.getElementById('pic' + compArry[1]).src) {
            //compares the value and if they match green borders
            document.getElementById('pic' + compArry[0]).style.border = "green 10px solid";
            document.getElementById('pic' + compArry[1]).style.border = "green 10px solid";
            //empty array
            compArry.pop();
            compArry.pop();

            counter++;

        } else {
            setTimeout(function() {
                //if they don't match timer to flip them over again
                document.getElementById('pic' + compArry[0]).style.zIndex = "0";
                document.getElementById(compArry[0]).style.zIndex = "1";
                document.getElementById('pic' + compArry[1]).style.zIndex = "0";
                document.getElementById(compArry[1]).style.zIndex = "1";
                //empty array
                compArry.pop();
                compArry.pop();
            }, 700)
        }   
    }
    console.log(counter);
    if (counter == 6) {
        document.getElementById('title').innerHTML = '¡Enhorabuena!';
        document.getElementById('message').innerHTML = 'You did it! Press "New Puzzle" to play again';
        document.getElementById('message2').style.display = 'none';
    }
}

document.getElementById('gameBtn').addEventListener('click', function cardDisappear() {
    // repeated so theres less of a chance for a blank card 
    for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * (newCards.length));
        document.getElementById(idArry[num]).src =  newCards[i];
        document.getElementById(id2Arry[num]).src =  newCards[i];
    }
    for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * (newCards.length));
        document.getElementById(idArry[num]).src =  newCards[i];
        document.getElementById(id2Arry[num]).src =  newCards[i];
    }
    for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * (newCards.length));
        document.getElementById(idArry[num]).src =  newCards[i];
        document.getElementById(id2Arry[num]).src =  newCards[i];
    }
    for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * (newCards.length));
        document.getElementById(idArry[num]).src =  newCards[i];
        document.getElementById(id2Arry[num]).src =  newCards[i];
    }
    for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * (newCards.length));
        document.getElementById(idArry[num]).src =  newCards[i];
        document.getElementById(id2Arry[num]).src =  newCards[i];
    }

    
});
