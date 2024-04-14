
const skins = document.querySelector('div.skin');
const mouth = document.querySelector('div.mouth');
const eyes = document.querySelector('div.eyes');
const Sbuttons = skins.querySelectorAll('button');
const Mbuttons = mouth.querySelectorAll('button');
const Ebuttons = eyes.querySelectorAll('button');

Sbuttons.forEach(button => {
    button.addEventListener('click', () => {
        Sbuttons.forEach(button => {
            button.classList.remove('selected');
        });
        button.classList.add('selected');
        const skin = button.querySelector('img').getAttribute('src');
        const avatarImage = document.getElementById('avatar-container');
        const img = document.createElement('img');
        img.setAttribute("id", "image_skin");
        try{
            document.getElementById("image_skin").remove();
        }catch(err){
            console.log(err);
        }
        img.src = skin;
        avatarImage.appendChild(img);
    });
});

Ebuttons.forEach(button => {
    button.addEventListener('click', () => {
        Ebuttons.forEach(button => {
            button.classList.remove('selected');
        });
        button.classList.add('selected');
        const eyes = button.querySelector('img').getAttribute('src');
        const avatarImage = document.getElementById('avatar-container');
        const img = document.createElement('img');
        img.setAttribute("id", "image_eyes");

        try{
            document.getElementById("image_eyes").remove();
        }catch(err){
            console.log(err);
        }
        img.src = eyes;
        avatarImage.appendChild(img);
    });
});

Mbuttons.forEach(button => {
    button.addEventListener('click', () => {
        Mbuttons.forEach(button => {
            button.classList.remove('selected');
        });
        button.classList.add('selected');
        const mouth = button.querySelector('img').getAttribute('src');
        const avatarImage = document.getElementById('avatar-container');
        const img = document.createElement('img');
        img.setAttribute("id", "image_mouth");

        try{
            document.getElementById("image_mouth").remove();
        }catch(err){
            console.log(err);
        }
        img.src = mouth;
        avatarImage.appendChild(img);
    });
});







