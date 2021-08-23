function update(){
    pl1_name=document.getElementById("player_input1").value;

     localStorage.setItem("player1",pl1_name);
     pl2_name=document.getElementById("player_input2").value;
     localStorage.setItem("player2",pl2_name);

     window.location="game_page.html";
}
