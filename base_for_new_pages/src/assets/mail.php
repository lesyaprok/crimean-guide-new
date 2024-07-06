<?php 
$name = $_POST['name'];
$email = $_POST['mail'];
$tel = $_POST['tel'];
$text = $_POST['text'];

$name = ($name) ? htmlspecialchars($name) : "";
$email = ($email) ? htmlspecialchars($email) : "";
$tel = ($tel) ? htmlspecialchars($tel) : "";
$text = ($text) ? htmlspecialchars($text) : "";

$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);
$text = urldecode($text);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);
$text = trim($text);

// ini_set('display_errors', 'On');
// error_reporting('E_ALL');

if (!mail("mail@xn--c1acljkkgk2a2f.online", "Новое предложение", "Name: ".$name."\n" . "Email: ".$email."\n" . "Number: ".$tel."\n" . "Text: ".$text."\n" , "From: mail@xn--c1acljkkgk2a2f.online \r\n")) {
    echo "К сожалению, письмо не отправлено";
}
else {
    echo "Успешно отправлено";
}    

?>