function checkPassword() {
     if (document.getElementById("password").value!= "12345678") {
       alert("Wrong Password!");
     } else {
       document.getElementById("myHead").innerText = "Correct password!";
     }
   }
