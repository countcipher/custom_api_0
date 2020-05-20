<?php

$host = 'localhost';
$user = 'root';
$password = '';
$dbase = 'api_test';

//$number = $_GET['id'];

//echo $number;

$connection = mysqli_connect($host, $user, $password, $dbase);

//$query = "SELECT * FROM employees WHERE id = {$_GET['id']}";
$query = "SELECT * FROM employees";

$result = mysqli_query($connection, $query);

$json_array = array();

while($row = mysqli_fetch_assoc($result)){
    //$json_array[] = $row;
    array_push($json_array, $row);
}



echo json_encode($json_array);

/*echo '<pre>';
print_r($json_array);
echo '</pre>';*/



?>