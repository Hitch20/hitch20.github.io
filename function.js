/*var element = document.getElementById("test");
element.innerHTML = "random   ";
element.appendChild(newInput);*/
var serial = document.getElementById("SKU").value;

function createNote(){
var nota = document.getElementById("plm");
nota.innerHTML = String(serial);
}

serial.addEventListener("change" , createNote());
