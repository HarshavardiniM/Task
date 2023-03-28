<?php
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the username and password are correct
  if ($username == 'myusername' && $password == 'mypassword') {
    // Redirect the user to the dashboard page
    header('Location: dashboard.php');
    exit();
  } else {
    // Display an error message
    echo 'Invalid username or password';
  }
?>
