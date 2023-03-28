<?php
$uname1 = $_POST['uname1'];
$email1  = $_POST['email1'];
$upswd1 = $_POST['upswd1'];
$upswd2 = $_POST['upswd2'];

if (!empty($uname1) || !empty($email1) || !empty($upswd1) || !empty($upswd2)) {

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "register";

    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') ' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email1 From registration Where email1 = ? Limit 1";
        $INSERT = "INSERT Into registration (uname1 , email1 ,upswd1, upswd2 )values(?,?,?,?)";

        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email1);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        //checking username
        if ($rnum==0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssss", $uname1,$email1,$upswd1,$upswd2);
            $stmt->execute();
            echo "New record inserted sucessfully";
        } else {
            echo "Someone already registered using this email";
        }
        $stmt->close();
        $conn->close();
    }

} else {
    echo "All fields are required";
    die();
}
?>

