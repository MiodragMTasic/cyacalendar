function createCalendar() {
  var k = 8;
  var allDays = ["", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var newTable = document.createElement("table");
  var firstTR = document.createElement("tr");
  for (v=0; v<8; v++){
    var newFirstTRTD = document.createElement("td");
    newFirstTRTD.id = "tableData";
    newFirstTRTD.innerHTML = allDays[v];
    firstTR.appendChild(newFirstTRTD);
  }
  newTable.appendChild(firstTR);
  for (i=0;i<19;i++){
    for (p=0; p<2; p++){
      if (p==0){
        var newTR = document.createElement("tr");
        newTable.appendChild(newTR);
        var newTD = document.createElement("td");
        newTD.id = "tableData";
        newTD.innerHTML = k + ":00";
        newTR.appendChild(newTD);
        for (u=0; u<7; u++){
          var emptyTD = document.createElement("td");
          emptyTD.id = "tableData";
          emptyTD.innerHTML = "";
          newTR.appendChild(emptyTD);
        }
      }
      if (i<16) {
      if (p==1) {
        var newTR2 = document.createElement("tr");
        newTable.appendChild(newTR2);
        var newTD2 = document.createElement("td");
        newTD2.id = "tableData";
        newTD2.innerHTML = k+ ":30";
        newTR2.appendChild(newTD2);
        for (r=0; r<7; r++){
          var emptyTD = document.createElement("td");
          emptyTD.id = "tableData";
          emptyTD.innerHTML = "";
          newTR2.appendChild(emptyTD);
        }
        k+=1;
      }
    }
}
/* awdadadadwadawd */
/* awdadadadwadawd */
/* awdadadadwadawd */
if (i>15){
k=0;
for (p=0; p<4; p++){
  if (p==1 || p==3){
    var newTR = document.createElement("tr");
    newTable.appendChild(newTR);
    var newTD = document.createElement("td");
    newTD.id = "tableData";
    newTD.innerHTML = "0" + k + ":00";
    newTR.appendChild(newTD);
    for (u=0; u<7; u++){
      var emptyTD = document.createElement("td");
      emptyTD.id="tableData";
      emptyTD.innerHTML = "";
      newTR.appendChild(emptyTD);
    }
  }
  if (i<17) {
  if (p==0 || p==2) {
    var newTR2 = document.createElement("tr");
    newTable.appendChild(newTR2);
    var newTD2 = document.createElement("td");
    newTD2.id = "tableData";
    newTD2.innerHTML = "0" + k+ ":30";
    newTR2.appendChild(newTD2);
    for (r=0; r<7; r++){
      var emptyTD = document.createElement("td");
      emptyTD.innerHTML = "";
      emptyTD.id="tableData";
      newTR2.appendChild(emptyTD);
    }
    k+=1;
  }
}
}
break;
}
  newTable.id = "theTableItself";
  var theWantedArea = $("calendar");
  theWantedArea.appendChild(newTable);
  }
}
