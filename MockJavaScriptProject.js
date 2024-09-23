let calculateBtn = document.getElementById("calculatebtn");
let clearBtn = document.getElementById("clearbtn");
calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearAll);
 
 
 function calculate() {
    let oldqnty = document.getElementById("qnty").value
    let oldprice = document.getElementById("price").value
    let nqnty = document.getElementById("newqnty").value
    let nprice = document.getElementById("newprice").value
     
   let totalinvestedamount = oldqnty * oldprice + nqnty * nprice
   
   let totalqntyResult = parseInt(oldqnty) + parseInt(nqnty);
   
   // let totalqntyResult = oldqnty + nqnty;

   let averagepriceresult = totalinvestedamount / totalqntyResult;
    console.log(averagepriceresult);
    
   let task1 = document.getElementById("totalqty")
   task1.innerHTML = totalqntyResult +" qty";


   let task2 = document.getElementById("averageprice")
   task2.innerHTML = averagepriceresult +" Rs";
   task2.innerHTML = averagepriceresult.toFixed(2)
   

   let task3 = document.getElementById("totalinvestedamount")
   task3.innerHTML = totalinvestedamount +" Rs";
   task2.innerHTML = totalinvestedamount.toFixed(2)
 }
 function clearAll() {


  let oldqnty = document.getElementById("qnty").value =" "
  let oldprice = document.getElementById("price").value =" "
  let nqnty = document.getElementById("newqnty").value =" "
  let nprice = document.getElementById("newprice").value =" "


  let task1 = document.getElementById("totalqty")
   task1.innerHTML ="0 Qty";

   let task2 = document.getElementById("averageprice")
   task2.innerHTML ="0 Rs";
  

   let task3 = document.getElementById("totalinvestedamount")
   task3.innerHTML ="0Rs";
   
 }
