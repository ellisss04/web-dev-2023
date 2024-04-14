<?php
$scores = [];
$handle = fopen('../scores.txt', 'r');
if ($handle){
    while (($line = fgets($handle))!== false){
        $parts = explode(',',$line);
        if (count($parts)===2){
            $scores[] = [
                'username'=>$parts[0],
                'score'=>number_format(floatval($parts[1]), 2)
            ];
        }
    }
    fclose($handle);
}
usort($scores, function($a, $b){
    return $a['score'] - $b['score'];
});

header('Content-Type: application/json');
echo json_encode($scores);
