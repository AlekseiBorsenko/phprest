<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include_once 'lib/SimpleOrm.php';
// Connect to the database using mysqli
$conn = new mysqli('localhost', 'root', 'asdqwe123');

if ($conn->connect_error)
  die(sprintf('Unable to connect to the database. %s', $conn->connect_error));

// Tell Simple ORM to use the connection you just created.
SimpleOrm::useConnection($conn, 'vlasovmed');