<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
    <link rel="stylesheet" href = "styles/Emojis.css">
    <link rel="stylesheet" href = "styles/avatar.css">
    <style>
        /* Add padding to containers */
        .container {
            padding: 16px;
            background-color: white;
        }

        /* Full-width input fields */
        input[type=text] {
            width: 100%;
            padding: 15px;
            margin: 5px 0 22px 0;
            display: inline-block;
            border: none;
            background: #f1f1f1;
        }

        input[type=text]:focus{
            background-color: #ddd;
            outline: none;
        }

        /* Overwrite default styles of hr */
        hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
        }

        /* Set a style for the submit button */
        .registerbtn {
            background-color: #5833ff;
            color: white;
            padding: 16px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            opacity: 0.9;
        }

        .registerbtn:hover {
            opacity: 1;
        }
    </style>
    <link rel="stylesheet" href = "styles/image_styles.css">
    <?php include('php_scripts/navbar.php');?>
</head>
<body>

<div id = "Main">
    <form action="php_scripts/register_cookie.php" method="post">
        <div class="container">
            <div id="avatar-container">
            </div>
            <h1>Register</h1>
            <p>Please choose a username to register.</p>
            <hr>

            <label for="Username"><b>Username/Nickname</b></label>
            <link rel="stylesheet" href = "styles/shake.css">
            <input type="text" placeholder="Enter User" pattern="[a-zA-Z0-9]+" name="username" id="username" required>
            <p>Choose avatar</p>
            <hr>
            <div id="avatar">
                <label for="skin"></label>
                <div class="skin">
                    <label><button id="skin1" name="skin" class="btn" value="1" type="button">
                        <img src="emoji%20assets/skin/green.png" width="40px" height="40px"/>
                    </button></label>
                    <label><button id="skin2" name="skin" class="btn" value="2" type="button" >
                        <img src="emoji%20assets/skin/red.png" width="40px" height="40px"/>
                        </button></label>
                    <label><button id ="skin3" name="skin" class="btn" value="3"type="button" >
                        <img src="emoji%20assets/skin/yellow.png" width="40px" height="40px"/>
                        </button></label>
                </div>

                <label for="eyes"></label>
                <div class="eyes">
                    <label><button id="eyes" class="btn" value="4" type="button">
                        <img src="emoji%20assets/eyes/laughing.png" width="40px" height="40px"/>
                        </button></label>
                    <label><button id="eyes" class="btn" value="5" type="button">
                        <img src="emoji%20assets/eyes/closed.png" width="40px" height="40px"/>
                    </button></label>
                    <label><button id="eyes" class="btn" value="6" type="button">
                        <img src="emoji%20assets/eyes/long.png" width="40px" height="40px"/>
                    </button></label>
                    <label><button id="eyes" class="btn" value="7" type="button">
                        <img src="emoji%20assets/eyes/normal.png" width="40px" height="40px"/>
                    </button></label>
                    <label><button id="eyes" class="btn" value="8" type="button">
                        <img src="emoji%20assets/eyes/rolling.png" width="40px" height="40px"/>
                    </button></label>
                    <label><button id="eyes" class="btn" value="9" type="button">
                        <img src="emoji%20assets/eyes/winking.png" width="40px" height="40px"/>
                    </button></label>
                </div>

                <div class="mouth" >
                    <button class="btn" type="button" >
                        <img src="emoji%20assets/mouth/open.png" width="40px" height="40px"/>
                    </button>
                    <button class="btn" type="button">
                        <img src="emoji%20assets/mouth/sad.png" width="40px" height="40px"/>
                    </button>
                    <button class="btn" type="button">
                        <img src="emoji%20assets/mouth/smiling.png" width="40px" height="40px"/>
                    </button>
                    <button class="btn" type="button">
                        <img src="emoji%20assets/mouth/straight.png" width="40px" height="40px"/>
                    </button>
                    <button class="btn" type="button">
                        <img src="emoji%20assets/mouth/surprise.png" width="40px" height="40px"/>
                    </button>
                    <button class="btn" type="button">
                        <img src="emoji%20assets/mouth/teeth.png" width="40px" height="40px"/>
                    </button>
                </div>
            </div>

            <script src="Javascript/selectButton.js"></script>
            <script src="Javascript/registerCookie.js"></script>


            <button type="submit" class="registerbtn" onclick="registerCookie()">Register</button>
        </div>
    </form>
</div>



</body>
</html>
