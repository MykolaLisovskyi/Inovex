<?php


$to = "sakhnodw@gmail.com";
$subject = "Письмо с сайта Innovex";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";


$msg = "Innovex \r\n";
$msg .= "<br>".$_POST["nameForm"]."\r\n";
$msg .= "<br> Имя: ".$_POST["name"]."\n";
$msg .= "<br> Телефон: ".$_POST["telephone"]."\n";
$msg .= "<br> Сообщение: ".$_POST["message"]."\n";

mail($to, $subject, $msg, $headerss);


?>
