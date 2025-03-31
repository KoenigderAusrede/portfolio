<?php
// Puffer starten, um unerwartete Ausgaben zu verhindern
ob_start();

// CORS-Header setzen, um Anfragen von Angular (https://dieblasers.de) zu erlauben
header("Access-Control-Allow-Origin: https://dieblasers.de");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// OPTIONS-Anfragen für Preflight abfangen und mit 200 antworten
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Überprüfen, ob die Methode POST ist
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // POST-Daten sicher auslesen (sowohl JSON als auch Form-Daten unterstützen)
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);

    if (!$data) {
        $data = $_POST; // Falls JSON leer ist, versuche $_POST
    }

    // Debugging: Speichere empfangene Daten
    file_put_contents('debug.log', json_encode($data, JSON_PRETTY_PRINT) . "\n", FILE_APPEND);

    // E-Mail-Daten aus der Anfrage lesen
    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $message = trim($data['message'] ?? '');

    // Validierung der Felder
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400); // Bad Request
        echo json_encode(["error" => "All fields are required (name, email, message)."]);
        exit();
    }

    // E-Mail-Adresse validieren
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Bad Request
        echo json_encode(["error" => "Invalid email address."]);
        exit();
    }

    // E-Mail vorbereiten
    $to = "felix@dieblasers.de";
    $subject = "Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "Email sent successfully."]);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["error" => "Failed to send email."]);
    }
} else {
    // Wenn keine POST-Methode verwendet wird
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Invalid request method. Use POST."]);
}

// Pufferinhalt ausgeben und prüfen, ob unerwartete Zeichen gesendet wurden
$output = ob_get_clean();
if (!empty($output)) {
    file_put_contents('debug.log', "❌ Unerwartete Ausgabe: " . $output . "\n", FILE_APPEND);
}
exit();
?>