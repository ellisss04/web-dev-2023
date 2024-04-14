<?php
if (isset($_COOKIE["uname"])){
    echo
    '<link rel="stylesheet" href = "../styles/navbar.css">
<div class="topnav">
    <a id="home" href="index.php"><strong>Home</strong></a>
    <div>
        <p id="user-name"></p>
        <img class= "overlay-image"id="img1" style="width: 30px; height: auto;">
        <img class="overlay-image" id="img2" style="width: 30px; height: auto;">
        <img class="overlay-image" id="img3"style="width: 30px; height: auto;"> 
    </div> 
    <div class="topnav-right">
        <a id="memory" href="pairs.php"><strong>Play pairs</strong></a>
        <a id="leaderboard"href="leaderboard.php"><strong>Leaderboard</strong></a>
    </div>
        <script src = "Javascript/retrieveCookie.js"></script>
</div>';


}else{
    echo
    '<link rel="stylesheet" href = "/styles/navbar.css">
    <div class="topnav">
        <a id="home" href="index.php"><strong>Home</strong></a>
        <div class="topnav-right">
            <a id="register" href="registration.php"><strong>Register</strong></a>
        </div>
    </div>';
}
