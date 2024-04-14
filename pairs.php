<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pairs game</title>
    <link rel="stylesheet" href = "styles/image_styles.css">
    <link rel="stylesheet" href="styles/card_Styles.css">
    <?php include('php_scripts/navbar.php');
    include ('php_scripts/footer.php')?>
</head>
<body>

<button id="start-btn" onclick="start()">Start Game</button>


<div id = "Main">
    <div id="background">
            <div id="timer"></div>
            <div id="points-id"></div>
        <div id="cards.container">
            <div class = "card">
                <img src="" class="skin-colour">
                <img src="" class="eyes">
                <img src ="" class="mouth">
            </div>
            <div class = "card">
                <img src="" class="skin-colour">
                <img src="" class="eyes">
                <img src ="" class="mouth">
            </div>
            <div class = "card">
                <img src="" class="skin-colour">
                <img src="" class="eyes">
                <img src ="" class="mouth">
            </div>
            <div class = "card">
                <img src="" class="skin-colour">
                <img src="" class="eyes">
                <img src ="" class="mouth">
            </div>
            <div class = "card">
                <img src="" class="skin-colour">
                <img src="" class="eyes">
                <img src ="" class="mouth">
            </div>
        </div>

    </div>
    <div class= "win-message" id="win-message" style="display:none">
        <p>Congratulations you won!</p>
        <div id="scores">
            <p id="score-id"></p>
            <p id="time-id"></p>
            <p id="final-id"></p>
        </div>
        <div class="win-buttons">
            <button id="submit" onclick="submit()">Submit</button>
            <button id="replay" onclick="replay()">Play again?</button>
        </div>
    </div>

    <div class= "lose-message" id="lose-message" style="display:none">
        <p>You lost!</p>
        <div class="win-buttons">
            <button id="replay" onclick="replay()">Play again?</button>
        </div>
    </div>
</div>
    <script src="Javascript/generateAvatars.js"></script>
    <?php footer()?>
</div>


</body>
</html>