<?php
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
    showError();
    return;
}

// Sanitization
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

$name = filter_var($name, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$message = filter_var($message, FILTER_SANITIZE_STRING);

$name = substr($name, 0, 255);
$email = substr($email, 0, 255);
$message = "envoyé depuis le site du fablab132:" . substr($message, 0, 255);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    showError();
    return;
}

$to = "fabrice.meuzeret@gmail.com";
$subject = "Nouveau message de $name";
$body = "Nom: $name\nEmail: $email\nMessage:\n$message";
$headers =  "From: $email";

if (mail($to, $subject, $body, $headers)) {
    showSuccess();
} else {
    showError();
}

function showError()
{
    echo '<p id="message">Erreur lors de l\'envoi du message, veuillez réessayer plus tard.</p>';
}

function showSuccess()
{
    echo '<p id="message">Merci pour votre message ! Nous vous répondrons dès que possible.</p>';
}
?>
<script>
    setTimeout(() => {
        window.location.href = "https://lab132.iut-troyes.fr/"
    }, 3000);
</script>