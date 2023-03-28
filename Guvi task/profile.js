function validateForm() {
  var lastname = document.forms["myform3"]["lastname"].value;
  var address = document.forms["myform3"]["address"].value;
  var age = document.forms["myform3"]["age"].value;
  var no = document.forms["myform3"]["no"].value;

  if (lastname == null || lastname == "") {
    document.getElementById("errorBox").innerHTML = "Enter the Last name";
    return false;
  }

  if (address == null || address == "") {
    document.getElementById("errorBox").innerHTML = "Enter the Address";
    return false;
  }

  if (age == null || age == "") {
    document.getElementById("errorBox").innerHTML = "Enter the Age";
    return false;
  }

  if (no == null || no == "") {
    document.getElementById("errorBox").innerHTML = "Enter the Phone Number";
    return false;
  }

  if (no.length != 10) {
    document.getElementById("errorBox").innerHTML = "Phone Number should be of 10 digits";
    return false;
  }

  alert("Profile Updated successfully");
}

