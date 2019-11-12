<?php 
$input_phone_number = $_POST['input_phone_number'];
$input_name = $_POST['input_name'];
$input_comment = $_POST['input_comment'];
echo $input_comment;
mail("andrey.mad.87@gmail.com", "Заявка с сайта", "ФИО:".$input_phone_number.". E-mail: ".$input_name ,"From: ananenkoe@gmail.com \r\n");

>