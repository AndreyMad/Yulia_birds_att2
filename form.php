<?php

$input_phone_number=$_POST['input_phone_number'];
$input_name = $_POST['input_name'];
$input_comment = $_POST['input_comment'];


$input_phone_number = htmlspecialchars($input_phone_number);
$input_name = htmlspecialchars($input_name);
$input_comment = htmlspecialchars($input_comment);


$input_phone_number = urldecode($input_phone_number);
$input_name = urldecode($input_name);
$input_comment = urldecode($input_comment);


$input_phone_number = urldecode($input_phone_number);
$input_name = urldecode($input_name);
$input_comment = urldecode($input_comment);


echo $input_name;
?>
