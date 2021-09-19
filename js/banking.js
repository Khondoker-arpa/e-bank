const depositBtn = document.getElementById("deposit-button")
depositBtn.addEventListener('click',function(){
   const depositTotal = document.getElementById("deposit-total")
   const depositTotalText = depositTotal.innerText
   const depositTotalNum = parseFloat(depositTotalText)
   const newDeposit = document.getElementById("deposit-input")
   const newDepositText = newDeposit.value
   const newDepositNum = parseFloat(newDepositText)
   depositTotal.innerText= depositTotalNum + newDepositNum
   newDeposit.value = ""


   const balanceTotal = document.getElementById("balance-total")
   const balanceTotalText = balanceTotal.innerText
   const balanceTotalNum = parseFloat(balanceTotalText)
   
   balanceTotal.innerText= balanceTotalNum + newDepositNum

   
   

})