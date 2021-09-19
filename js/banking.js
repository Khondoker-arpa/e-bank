const depositBtn = document.getElementById("deposit-button")
const withdrawBtn = document.getElementById("withdraw-button")

depositBtn.addEventListener('click',function(){
   const depositTotal = document.getElementById("deposit-total")
   const depositTotalText = depositTotal.innerText
   const depositTotalNum = parseFloat(depositTotalText)
   const newDeposit = document.getElementById("deposit-input")
   const newDepositText = newDeposit.value
   const newDepositNum = parseFloat(newDepositText)
   depositTotal.innerText= depositTotalNum + newDepositNum
   newDeposit.value = " "


   const depositBalance = document.getElementById("balance-total")
   const depositBalanceText = depositBalance.innerText
   const depositBalanceNum = parseFloat(depositBalanceText)
   
   depositBalance.innerText= depositBalanceNum + newDepositNum

   
   

})

withdrawBtn.addEventListener('click',function(){
   

   const withdrawTotal = document.getElementById("withdraw-total")
   const withdrawTotalText = withdrawTotal.innerText
   const withdrawTotalNum = parseFloat(withdrawTotalText)

   const withdrawInput = document.getElementById("withdraw-input")
   const withdrawInputText = withdrawInput.value
   const withdrawInputNum = parseFloat(withdrawInputText)

 
   withdrawTotal.innerText = withdrawTotalNum + withdrawInputNum


   withdrawInput.value = " "

   const withdrawBalance = document.getElementById("balance-total")
   const withdrawBalanceText = withdrawBalance.innerText
   const withdrawBalanceNum = parseFloat(withdrawBalanceText)

   withdrawBalance.innerText = withdrawBalanceNum - withdrawInputNum








})

