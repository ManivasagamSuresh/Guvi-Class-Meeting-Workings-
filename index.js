var ele1 =document.createElement("div");
ele1.setAttribute("class","container");


var ele2 =document.createElement("div");
ele2.setAttribute("class","row");


var ele3 =document.createElement("div");
ele3.setAttribute("class","col-1");

ele2.append(ele3);
ele1.append(ele2);
document.body.append(ele1);
