/// Section 5
//Land Uses
var mutton_land = document.getElementById("mutton");
var beef_land = document.getElementById("beef");
var pork_land = document.getElementById("pork");
var chicken_land = document.getElementById("chicken");

// Event Listeners
// Mutton
mutton_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Mutton meat: <br><b>180 m<sup>2</sup></b><br> (per 100g proteins)";
        document.getElementById("land_use_mutton").style.fill = '#7CFC00';
    });
mutton_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Choose to see <br><b> surface in [m<sup>2</sup>]</b><br> (per 100g proteins)';
        document.getElementById("land_use_mutton").style.fill = '#808080'
    });

// Beef
beef_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Beef meat: <br><b>160 m<sup>2</sup></b><br> (per 100g proteins)";
        document.getElementById("land_use_beef").style.fill = '#7CFC00';
    });
beef_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Choose to see <br><b> surface in [m<sup>2</sup>]</b><br> (per 100g proteins)';
        document.getElementById("land_use_beef").style.fill = '#808080'
    });

// Pork
pork_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Pork meat: <br><b>10 m<sup>2</sup></b><br> (per 100g proteins)";
        document.getElementById("land_use_pork").style.fill = '#7CFC00';
    });
pork_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Choose to see <br><b> surface in [m<sup>2</sup>]</b><br> (per 100g proteins)';
        document.getElementById("land_use_pork").style.fill = '#808080'
    });

// Chicken
chicken_land.onmouseover =(
    function mouseOverEffectMutton() {
        document.getElementById("default_meat").innerHTML = "Chicken meat: <br><b>7 m<sup>2</sup></b><br> (per 100g proteins)";
        document.getElementById("land_use_chicken").style.fill = '#7CFC00';
    });
chicken_land.onmouseout = (
    function mouseOutEffectMutton() {
        document.getElementById('default_meat').innerHTML = 'Choose to see <br><b> surface in [m<sup>2</sup>]</b><br> (per 100g proteins)';
        document.getElementById("land_use_chicken").style.fill = '#808080'
    });


/// Section 6
var rechteck = document.getElementById("beef1");

rechteck.onmouseover = (
    function mouseOverEffectRechteck() {
        document.getElementById("arrow1").style.visibility = "visible";
        document.getElementById("tree1").style.visibility = "visible";
        document.getElementById("beef_reforestation").style.opacity = '0.7';
    });
rechteck.onmouseout = (
    function mouseOutEffectRechteck() {
        document.getElementById("arrow1").style.visibility = "hidden";
        document.getElementById("tree1").style.visibility = "hidden";
        document.getElementById("beef_reforestation").style.opacity = '1';

    });



