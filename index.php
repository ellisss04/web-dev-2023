<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href = "styles/image_styles.css">
    <link rel="stylesheet" href = "styles/avatar.css">
    <?php
//
//            unset($_COOKIE['uname']);
//            setcookie('uname', '', (time()-3600)*9, '/');
//            setcookie('eyes_name', '', time()-3600);
//            setcookie('mouth_name', '', time()-3600);
//            setcookie('skin_name', '', time()-3600);
        include('php_scripts/navbar.php');
    include('php_scripts/isRegistered.php');
    include('php_scripts/footer.php');
        ?>
</head>
<body>

<div id = "Main">
    <br>
    <?php
    isRegistered();
    ?>
    <div class="username-div">
        <h1 id="user-name"style="color: #dddddd; position: center" ></h1>
    </div>

</div>

</body>
</html>