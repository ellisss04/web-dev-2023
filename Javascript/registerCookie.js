function registerCookie(){
    let divElement = document.getElementById("avatar-container");
    let imgElements= divElement.getElementsByTagName("img");
    if (imgElements.length===0){
        console.log("zero elements")
    }else{
        console.log("pass");

        let eyes = document.getElementById("image_eyes");
        let eyesVal = eyes.getAttribute("src");
        document.cookie = "eyes_name="+ eyesVal+ ";expires= Tue, 30 May 2023 23:59:59 GMT";

        let mouth = document.getElementById("image_mouth");
        let mouthVal = mouth.getAttribute("src");
        document.cookie = "mouth_name="+ mouthVal+ ";expires= Tue, 30 May 2023 23:59:59 GMT";

        let skin = document.getElementById("image_skin");
        let skinVal = skin.getAttribute("src");
        document.cookie = "skin_name="+ skinVal+ ";expires= Tue, 30 May 2023 23:59:59 GMT";
    }
}