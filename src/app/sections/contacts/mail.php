<?php

// Guardar los datos recibidos en variables:
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
// Definir el correo de destino:
$dest = "depetrinicolas@gmail.com"; 
 
// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
$headers = "From: $nombre <$email>\r\n";  
$headers .= "X-Mailer: PHP7\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Aqui definimos el asunto y armamos el cuerpo del mensaje
$asunto = "Contacto";
$cuerpo = "Nombre: ".$nombre."<br>";
$cuerpo .= "Email: ".$email."<br>";
$cuerpo .= "Mensaje: ".$mensaje;

//Enviamos el mensaje y comprobamos el resultado
if (mail($dest,$asunto,$cuerpo,$headers)) {
echo'<script type="text/javascript">
    alert("Mensaje Enviado Exitosamente, Nos pondremos en contacto con usted a la brevedad");
    window.location.href="../sections#pricing";
    </script>';
}
else {
echo'<script type="text/javascript">
    alert("Disculpe, El Mensaje No Fue Enviado Exitosamente. Intente nuevamente más tarde.");
    window.location.href="../sections#pricing";
    </script>';
}
 ?>

