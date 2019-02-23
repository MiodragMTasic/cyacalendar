  var theTDs = document.getElementsByTagName("td");
var k=0;
function startEditing() {
  for (i=0; i<theTDs.length; i++){
    theTDs[i].style.backgroundColor = "rgb(300,150,300)";
    k+=1;
  }
    for (i=0; i<theTDs.length; i++){
    theTDs[i].observe("click", turnGreen);

}
}
function turnGreen() {
    this.style.backgroundColor = "green";
}

function stopEditing() {
  for (i=0; i<theTDs.length; i++){
    if (theTDs[i].style.backgroundColor != "green"){
      theTDs[i].style.backgroundColor = "white";
    }
    else {
      theTDs[i].style.backgroundColor="green";
    }
  }
}
