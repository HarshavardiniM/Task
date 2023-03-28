
  function vfun1(){
            var uname1=document.forms["myform2"]["uname1"].value;
            var email1=document.forms["myform2"]["email1"].value;
            var upswd1=document.forms["myform2"]["upswd1"].value;
            var upswd2=document.forms["myform2"]["upswd2"].value;


        if(uname1==null || uname1=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "Enter the user name";
                 return false;
        }

        if(email1==null || email1==""){
                  document.getElementById("errorBox").innerHTML =
                   "Enter the email";
                 return false;
        }

        if(upswd1==null || upswd1=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "Enter the password";
                 return false;
        }

        if(upswd2==null || upswd2==""){
                  document.getElementById("errorBox").innerHTML =
                   "Enter the password";
                 return false;}

 		if(upswd1 != upswd2){
                  document.getElementById("errorBox").innerHTML =
                   "Password don't match";
                 return false;}

        

        if (uname1 != '' && upswd1 != '' && upswd2 != '' && email1 != '' && upswd1 == upswd2)


          alert("Registration successfull");
                         

        }