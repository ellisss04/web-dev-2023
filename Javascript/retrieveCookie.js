

let cookieNames = ["skin_name", "eyes_name", "mouth_name"];

try{
    for (let i=0; i<cookieNames.length; i++){
        let cookieValue = getCookie(cookieNames[i]);

        document.getElementById("img"+(i+1)).src = cookieValue;
    }
}catch (err){
    console.log("cookies not set");
}

let cookieValue = getCookie("uname");
try{
    let usernameElement = document.getElementById("user-name");
    usernameElement.textContent = cookieValue;
}catch(err){
    console.log("null element: user-name")
}


function getCookie(name){
    let value = "; " + document.cookie;
    let parts = value.split("; "+ name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}