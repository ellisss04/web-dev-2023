<?php
if (!file_exists('../scores.txt')){
    file_put_contents('../scores.txt','');
}

$username = $_POST['username'];
$score = $_POST['score'];
$filename = "../scores.txt";
echo$username;
echo$score;


if (file_exists($filename)) {
    $file = file($filename, FILE_IGNORE_NEW_LINES);
    $scores = array();
    foreach ($file as $line) {
        list($name, $scr) = explode(",", $line);
        $scores[$name] = intval($scr);
    }
} else {
    $scores = array();
}

// Check if the user already exists
if (isset($scores[$username])) {

    // Update the score if it's lower
    if ($scores[$username] > $score) {

        $scores[$username] = $score;

        // Update the score in the text file
        $lines = file($filename);
        foreach ($lines as $index => $line) {
            $parts = explode(",", $line);
            if ($parts[0] === $username) {
                $lines[$index] = $username . "," . $score . PHP_EOL;
                break;
            }
        }
        file_put_contents($filename, implode("", $lines));
    }
} else {
    // Add the user and score to the file
    $line = $username . "," . $score . PHP_EOL;
    file_put_contents($filename, $line, FILE_APPEND);
    $scores[$username] = $score;
}



