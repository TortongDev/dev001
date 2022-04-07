<?php

    $hostname   = "localhost";
    $password   = "";
    $username   = "root";
    $dbname     = "zero2p";
try {
    $conn = new PDO("mysql:host=$hostname;dbname=$dbname;",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (PDOException $err) {
    echo "Connect False : ".$e->getMessage();
}

?>