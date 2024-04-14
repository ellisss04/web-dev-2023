<?php
if (isset($_POST["username"])){
    setcookie('uname', $_POST["username"], time() + (86400 * 30),'/');
    //when using VM change "coursework" to "html"
    header("Location:/Coursework/index.php");

}else{
    echo 'invalid';
}
