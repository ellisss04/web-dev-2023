
let url = 'http://localhost:63342/Coursework/php_scripts/leaderboardHandler.php';
let xhr= new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange= function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        let scores = JSON.parse(xhr.responseText);
        let leaderboardDiv = document.getElementById('leaderboard-container');
        let table = document.createElement('table');
        table.setAttribute("id","table-id")

        let headerRow = table.insertRow();
        headerRow.style.backgroundColor= 'lightgrey';
        headerRow.style.fontSize='40px';
        let headerCell = headerRow.insertCell();
        headerCell.innerHTML='Username';

        headerCell= headerRow.insertCell();
        headerCell.innerHTML='Score';
        for (let i =0; i<scores.length; i++){
            let score = scores[i];
            let row = table.insertRow();
            let cell = row.insertCell();
            cell.innerHTML= score.username;
            cell.style.borderStyle='solid';
            cell.style.borderColor='black';
            cell.style.borderWidth='2px';

            cell = row.insertCell();
            cell.innerHTML = score.score;
            cell.style.borderStyle='solid';
            cell.style.borderColor='black';
            cell.style.borderWidth='2px';
            cell.style.flexBasis='40%';


            leaderboardDiv.appendChild(table);
        }
    };
}
xhr.send()
