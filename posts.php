<?php
$servername = "localhost";
$username = "lazyperf_acwd";
$password = "[[g0tr00t67]]";
$dbname = "lazyperf_acblog";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `posts` WHERE published_at = ( SELECT max(published_at) from posts )";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $date = date_create($row['published_at']);
        $url = "http://www.alexcaza.com/blog/" . date_format($date, 'Y/m/d') .'/'. $row['slug'];
        $response = array("title" => $row['title'], "url" => $url);
    }
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    echo "0 results";
}
$conn->close();
?>
