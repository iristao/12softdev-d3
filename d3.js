var svg = document.getElementById("svg");
var other = document.getElementById('other');
var heading = document.getElementById('heading');
var NS = "http://www.w3.org/2000/svg";
var circle = d3.selectAll("circle");

var korea = [5, 8, 4];
var russia = [2, 6, 9];
var toggle = 1; // 1 for korea, -1 for russia

var size = function(){
    toggle*= -1;
    if (toggle == 1){
        circle.data(korea);
        circle.attr("r", function(d){return d*5});
        heading.innerHTML = "Republic of Korea";
    }
    else{
        circle.data(russia);
        circle.attr("r", function(d){return d*5});
        heading.innerHTML = "Olympic Atheletes of Russia";
    }
}

circle.data(korea);
circle.attr("r", function(d){return d*5});
heading.innerHTML = "Republic of Korea";

other.addEventListener("click", size);