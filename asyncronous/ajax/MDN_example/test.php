<?php
// this script process the data sent using ajax

$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "Hi, " . $name . "!";
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);

?>
