<?php
session_start();

require 'csrf.php';

$csrf = new csrf();
$token_id = $csrf->get_token_id();
$token_value = $csrf->get_token($token_id);
if(isset($token_id) && isset($token_value) && $token_id != "" && $token_value != ""){
    $status = 'success';
}

$response = array (
    'status' => $status,
    'token_id' => $token_id,
    'token_value' => $token_value
);

header("Content-Type: application/json");
echo json_encode($response);

?>
