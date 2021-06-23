<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$sex = $_GET['sex'];
$height = $_GET['height'];
$weight = $_GET['weight'];
$training = $_GET['training'];
$intensity;
$calories;
$BMR;


if ($training = 0) {
    $intensity = 1.2;
} elseif ($training = 1) {
    $intensity = 1.375;
} elseif ($training = 2) {
    $intensity = 1.55;
} elseif ($training = 3) {
    $intensity = 1.725;
}

if ($sex = 'male') {
    $BMR = 88.362 + (13.397 * $weight) + (4.799 * $height) + (5.677 * $age);
    $calories = $BMR * $intensity;
} elseif ($sex = 'female') {
    $BMR = 447.593 + (9.247 + $weight) + (3.098 + $height) + (5.677 * $age);
    $calories = $BMR * $intensity;
}

echo "you should be eating " , $calories , "a day"; 



?>
</body>
</html>