let res =  fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((value)=>{
console.log(value);
let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class","row");
container.append(row)
document.body.append(container);


let divi = document.createElement("div");
divi.setAttribute("class","col-4");

for(let i =0;i<value.length;i++)
{
    let div = document.createElement("div");
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${value[i].flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${value[i].name}</h5>
      
      
    </div>
  </div>`;

row.append(div);
  
}
});




// let res =  fetch("https://data.covid19india.org/v4/min/data.min.json");
// res.then((data)=>data.json()).then((value)=>{
// console.log(value.TN.total.confirmed);

// for(let key in value)
// {
//     let div = document.createElement("div");
//     div.innerHTML= `confirmed  ${value[key].total.confirmed}
//     deceased  ${value[key].total.confirmed}` ;

//   document.body.append(div);
// }


// });



