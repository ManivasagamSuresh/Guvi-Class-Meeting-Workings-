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

    var button=document.createElement("button");
    button.setAttribute("type","button");
    button.addEventListener("click",butt);
    button.innerHTML="click karo";
    document.body.append(button);

    function butt(){
        console.log("hello")
    }
