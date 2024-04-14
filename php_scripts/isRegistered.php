<?php
function isRegistered(): void
{
    if (isset($_COOKIE["uname"])) {
        echo
        '<h1 style="color: #dddddd">Welcome to Pairs</h1>
           <a id="pairs" href="pairs.php"><strong>Click here to play</strong></a>';
        footer();
    } else {
        echo
        //change coursework to html when deploying to VM
        '<h1 style="color: #dddddd">You’re not using a registered session? 
         <a href="/Coursework/registration.php">Register now</a></h1>';
    }
}