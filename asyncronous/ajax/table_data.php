<?php
$books =  Array(
  ["title 1","author 1"],
  ["title F","author f"],
  ["feugiat et eros","dictumst"],
  ["consequat metus","sem sed sagittis"],
  ["lorem ipsum","lectus pellentesque"],
  ["integer pede justo","sapien"],
  ["consequat ut nulla","nullam sit"],
  ["title X" ,"author X"]
);
header("Content-Type: application/json");
echo json_encode($books);
?>
