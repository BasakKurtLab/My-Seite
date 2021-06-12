var sayi=1;
var sum=0;
var guthaben= zufall(500,1000);
document.getElementById("guthaben").innerHTML = guthaben;
var myCounter;
var time = 0;
var products = document.getElementById("products");

var suche = document.getElementById("sucheFeld");
var last;
var feldAktiv = false;


var r = zufall(1,4);
var pName = "Seiko " + r;

var preis = zufall(100, 200);
var namen = ["Seiko 0", "Seiko 1", "Seiko 2", "Seiko 3"];
var preise = [100, 200, 250, 300];
var imge = ["seiko1.png", "seiko2.png", "seiko3.png", "seiko1.png"];

for (i = 0; i <= 3; i++){
    var el = document.createElement("div");
    el.classList.add("card");

    

    var pspan = document.createElement("span");
    pspan.innerHTML = namen[i];

    var bild = document.createElement("div");
    bild.classList.add("bild");
    addOnClick(bild, i);

    var img = document.createElement("img");
    img.src = "img/"+imge[i];

    var preisdiv = document.createElement("div");
    preisdiv.classList.add("price");

    var preispan = document.createElement("span");
    preispan.innerHTML = +preise[i]+"-€";

    var btn = document.createElement("button");
    btn.innerHTML = "Hinzufigun";
    
    addWrite(btn, i);
    
    
    products.appendChild(el);
    el.appendChild(pspan);
    el.appendChild(bild);
    bild.appendChild(img);
    el.appendChild(preisdiv);
    preisdiv.appendChild(preispan);
    preisdiv.appendChild(btn);


}


function aktivieren(element) {

    if (element.classList.contains("aktiv") == false)
    {
        element.classList.add("aktiv");

        if (last != null)
        {
            last.classList.remove("aktiv");
        }
        last = element;
    }

    if (element.classList.contains("suchen") == true)
    {
        if (feldAktiv == false) {
            suche.style.opacity = "1";
            feldAktiv = true;
        }
        else {
            suche.style.opacity = "0";
            feldAktiv = false;
        }

    }
    
}

function addOnClick(elem, index)
{
    elem.onclick = function () {
        showPop(namen[index], preise[index]);
}
}

function showPop(produktName, produktPreis)
{
    popup.style.display = "flex";
    
    document.getElementById("popuph4").innerHTML = produktName;
    document.getElementById("popupspan").innerHTML = "Preis: " + produktPreis + ",- €";
    yaz(produktName, produktPreis);
}



function indenwarenkorb(x, y) {
    yaz(x, y);
    popup.style.display = "none";
    
}

function schliessen() {
    popup.style.display = "none";
}




function zufall(min, max){

    var rand = Math.floor(Math.random()*(max-min)+min);
    return rand;

}

function addWrite(ele, index) {
    ele.onclick = function ()
    {
        yaz(namen[index], preise[index]);
    }
}


function yaz(name,price)
{
var warenkorb=document.getElementById("sell");
var kosten=document.getElementById("sumKosten");
sum+=price;
var vorher=warenkorb.innerHTML;
var text="<div>" +sayi+ ". " +name+ " -- " +price+ "€</div>";
var nacher=vorher+text;
warenkorb.innerHTML=nacher;

kosten.innerHTML="Gesamtkosten=" +sum+ "-€";
kreisShow()
document.getElementById("item").innerHTML=""+ sayi +"";
chartShow();
sayi++;

}


function meldenKaufen()

{
    time = 3;

    var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben gekauft!";
    meldung.style.backgroundColor = "#2a8717";
    meldung.style.display = "block";
    myCounter = setInterval(timeLoser, 1000);

}

function meldenNicht()

{   time = 3;

    var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben nicht genügend Geld!";
    meldung.style.backgroundColor = "#e64343";
    meldung.style.display = "block";

    myCounter = setInterval(timeLoser, 1000);
}


function kaufen(){
    if(sum<=guthaben)
    {

        meldenKaufen();


    guthaben -= sum;
    document.getElementById("guthaben").innerHTML = "Guthaben: <b>" + guthaben + " €</b>";

    sum = 0;
    document.getElementById("sumKosten").innerHTML = "Gesamt: 0";

    sayi = 1;

    document.getElementById("sell").innerHTML = "";
    document.getElementById("item").innerHTML= "";
    kreisClose()

    }
    else
    {
        meldenNicht()
    }
}

var sc=document.getElementById("chart");
function shoppingChart(){
if(istBlock() == false)

{
chartShow();

}
else{

chartClose();
}

}

function istBlock(){
    if(getComputedStyle(sc,"").display=="none"){
        return false;
    }
    else{
        return true;
    }
}



function chartShow(){
    sc.style.display="block";
}
function chartClose(){
    sc.style.display="none";
}


var kr=document.getElementById("kreis");
function kreisShow(){
    kr.style.display="block";
}
function kreisClose(){
    kr.style.display="none";
}

function timeLoser()
{
    time--;
    if(time == 0)
    {
        clearInterval(myCounter);
        meldung.style.display = "none";

    }
}
