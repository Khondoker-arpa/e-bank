const depositBtn = document.getElementById("deposit-button")
const withdrawBtn = document.getElementById("withdraw-button")

depositBtn.addEventListener('click',function(){

   changeBalance("deposit")
   
})

withdrawBtn.addEventListener('click',function(){
   
   changeBalance("withdraw")
   
})

function changeBalance(type){
 
  
   const previousTotal = document.getElementById(`${type}-total`)
   const previousTotalText = previousTotal.innerText
   const previousTotalNum = parseFloat(previousTotalText)


   const newMoney = document.getElementById(`${type}-input`)
   const newMoneyText = newMoney.value
   const newMoneyNum = parseFloat(newMoneyText)
   previousTotal.innerText= previousTotalNum + newMoneyNum
   
   newMoney.value = " "


   const balanceTotal = document.getElementById("balance-total")
   const balanceTotalText = balanceTotal.innerText
   const balanceTotalNum = parseFloat(balanceTotalText)
   
   if(type == "withdraw"){
      balanceTotal.innerText = balanceTotalNum - newMoneyNum
   }
   else{
      balanceTotal.innerText = balanceTotalNum + newMoneyNum
   }


}

