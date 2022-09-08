// function foo(){
//     var first = document.getElementById("First").value;
//     var second = document.getElementById("second").value;
//     var last = document.getElementById("last").value;
//     var mail = document.getElementById("mail").value;
//     console.log(`my name is ${first} ${second} ${last} and my mail id id ${mail}`);
// }

// var res = document.getElementsByClassName("main");
// console.log(res);
// console.log(res[1].textContent);
// for(let i=0; i<res.length; i++)
// {
//     console.log(res[i].innerText);
// }
// var res = document.getElementsByTagName("div")[1].textContent;
// console.log(res)



// var ele= document.createElement("div");
// // ele.setAttribute("class","main");
// ele.setAttribute("class","main1 main");
// ele.setAttribute("id","main1");
// ele.innerHTML="hello mani";
// document.body.append(ele);
// function aler(){
//     var re=confirm("hello be careful");
//     console.log(re);

// }
// function aler(){
//     var re=prompt("hello be careful");
//     console.log(re);
//     } 

    // var button=document.createElement("button");
    // button.setAttribute("type","button");
    // button.addEventListener("click",butt);
    // button.innerHTML="click karo";
    // document.body.append(button);

    // function butt(){
    //     console.log("hello")
    // }


var first=label("label","for","first","First Name");
var inp1=inputelement("input","type","text","id","first");
var br1=linebreaker("br");

var second=label("label","for","middle","Middle Name");
var inp2=inputelement("input","type","text","id","middle");
var br2=linebreaker("br");

var third=label("label","for","last","Last Name");
var inp3=inputelement("input","type","text","id","Last");
var br3=linebreaker("br");

var fourth=label("label","for","mail","Mail id");
var inp4=inputelement("input","type","email","id","mail");
var br4=linebreaker("br");

var fifth=label("label","for","contact","Contact No.");
var inp5=inputelement("input","type","number","id","contact");
var br5=linebreaker("br");

document.body.append(first,inp1,br1,second,inp2,br2,third,inp3,br3,fourth,inp4,br4,fifth,inp5,br5);



function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.innerHTML=content;
     return ele;
   
    }
   
    function linebreaker(element){
    var ele=document.createElement(element);
    return ele;
    }
    
  
    function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
    
    }
