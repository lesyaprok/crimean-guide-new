<?php 
$name = $_POST['name'];
$email = $_POST['mail'];
$text = $_POST['text'];

$name = ($name) ? htmlspecialchars($name) : "";
$email = ($email) ? htmlspecialchars($email) : "";
$text = ($text) ? htmlspecialchars($text) : "";

$name = urldecode($name);
$email = urldecode($email);
$text = urldecode($text);

$name = trim($name);
$email = trim($email);
$text = trim($text);

// ini_set('display_errors', 'On');
// error_reporting('E_ALL');

if (!mail("mail@xn--c1acljkkgk2a2f.online", "Новое предложение", "Name: ".$name."\n" . "Email: ".$email."\n" . "Text: ".$text."\n" , "From: mail@xn--c1acljkkgk2a2f.online \r\n")) {
    echo "К сожалению, письмо не отправлено";
}
else {
    echo "Успешно отправлено";
}    

?>