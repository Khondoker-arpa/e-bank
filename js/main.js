const loginBtn = document.getElementById("login-submit")

loginBtn.addEventListener('click',function(){
    
    const userMail = document.getElementById("user-email").value
    const userPass = document.getElementById("user-password").value
    
    if(userMail == "abc@mail.com" && userPass == "12345"){
       window.location.href = "banking.html"
    }
    else{
        alert("email or password incorrect!!")
    }

})