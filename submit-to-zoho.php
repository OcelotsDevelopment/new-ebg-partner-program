<?php
// Handle CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight (OPTIONS) requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No Content
    exit();
}

header("Content-Type: application/json");

// Get raw POST data
$data = json_decode(file_get_contents("php://input"), true);

// Your Zoho API URL
$url = "https://www.zohoapis.com/crm/v7/functions/partnernetworkformsubmit/actions/execute?auth_type=apikey&zapikey=1003.ba088828d562e4eca4a11996f2dbd892.5404c13299356b3b7db0a4151c22430c";

// Prepare cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute cURL
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    // Error occurred
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'cURL error: ' . curl_error($ch)
    ]);
} else {
    // Success or API error
    http_response_code($httpCode);
    echo $response;
}

curl_close($ch);
?>
