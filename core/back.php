<?php
  $name = $_GET['name'];
  $email = $_GET['email'];
  $phone = $_GET['phone'];

  $message = "Его зовут: " . $name . ";\nПисать сюда: " . $email . ";\nЗвонить туда: " . $phone . ".";

  mail("abalakina19@gmail.com", "Ура! У вас новый лид с опилочки!", $message);

  echo json_encode($message);