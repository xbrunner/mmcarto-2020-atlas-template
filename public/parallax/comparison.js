/// Section 1

var rechteck = document.getElementsByClassName("land_beef1");

for (var i = 0; i < rechteck.length; i++) {

    rechteck[i].addEventListener('mouseover', mouseOverEffect1);
    rechteck[i].addEventListener('mouseout', mouseOutEffect1);
}


function mouseOverEffect1() {
    this.classList.add("interaction_transp");
    setTimeout(arrowVisible, 500); //Wait 0.5 sec
    setTimeout(treeVisible, 1500); //Wait 1.5 sec
    setTimeout(reforestationVisible, 1500); //Wait 1.5 sec
}
function mouseOutEffect1() {
    this.classList.remove("interaction_transp");
    setTimeout(arrowHide, 0); //Wait 5 sec
    setTimeout(treeHide, 10000); //Wait 10 sec
    setTimeout(reforestationHide, 10000); //Wait 10 sec
}

// Visible functions
function arrowVisible() {document.getElementById("arrow1").style.visibility = "visible";}
function treeVisible() {document.getElementById("tree1").style.visibility = "visible";}
function reforestationVisible() {document.getElementById("reforestation").style.filter = 'grayscale(0%)';}
//Hide funtions
function arrowHide() {document.getElementById("arrow1").style.visibility = "hidden";}
function treeHide() {document.getElementById("tree1").style.visibility = "hidden";}
function reforestationHide() {document.getElementById("reforestation").style.filter = 'grayscale(80%)';}

/// Section 2
var rechteck2 = document.getElementsByClassName("land_use");

for (var i = 0; i < rechteck2.length; i++) {

    rechteck2[i].addEventListener('mouseover', mouseOverEffect2);
    rechteck2[i].addEventListener('mouseout', mouseOutEffect2);
}

function mouseOverEffect2() {
    setTimeout(betailVisible, 500); //Wait 0.5 sec
}
function mouseOutEffect2() {
    document.getElementById("betail").style.filter = 'grayscale(80%)';
}
// Timing functions
function betailVisible() {document.getElementById("betail").style.filter = 'grayscale(0%)';}

//Land Uses
var mutton_land = document.getElementById("land_use_mutton");
var beef_land = document.getElementById("beef");
var pork_land = document.getElementById("pork");
var chicken_land = document.getElementById("chicken");

// Event Listeners
// Mutton
mutton_land.onmouseover =(
function mouseOverEffectMutton() {
    document.getElementById("default_meat").innerHTML = "Mutton meat: <br><b>180 m<sup>2</sup></b><br> (per 100g proteins)";
});
mutton_land.onmouseout = (
function mouseOutEffectMutton() {
    document.getElementById('default_meat').innerHTML = 'Meat type: <br>choose a meet type!<br> (per 100g proteins)';
});

// Beef
beef_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Beef meat: <br><b>160 m<sup>2</sup></b><br> (per 100g proteins)";
    });
beef_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Meat type: <br>choose a meet type!<br> (per 100g proteins)';
    });

// Pork
pork_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Pork meat: <br><b>10 m<sup>2</sup></b><br> (per 100g proteins)";
    });
pork_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Meat type: <br>choose a meet type!<br> (per 100g proteins)';
    });

// Chicken
chicken_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Chicken meat: <br><b>7 m<sup>2</sup></b><br> (per 100g proteins)";
    });
chicken_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Meat type: <br>choose a meet type!<br> (per 100g proteins)';
    });