player1_name=localStorage.getItem("pl1_name");
player2_name=localStorage.getItem("pl2_name");

 player1_score=0;
 player2_score=0;

document.getElementById("player_name1").innerHTML=player1_name +":";
document.getElementById("player_name2").innerHTML=player2_name +":";

document.getElementById("score_1").innerHTML=player1_score;
document.getElementById("score_2").innerHTML=player2_score;

document.getElementById("player_turn_question").innerHTML="question turn- "+player1_name;
document.getElementById("player_answer_question").innerHTML="answer turn- "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    small_word=get_word.toLowerCase();

    console.log("word in lower case=" + small_word);

    charAT1=small_word.charAt(1);
    console.log(charAT1);

    middle_char=Math.floor(small_word.length/2);
    charAT2=small_word.charAt(middle_char);
    console.log(charAT2);

    last_char=small_word.length-1;
    chatAT3=small_word.charAt(last_char);
    console.log(charAT3);

    remove_charAT1=small_word.replace(charAT1,"_");
    remove_charAT2=remove_charAT1.replace(charAT2,"_");
    remove_charAT3=remove_charAT2.replace(charAT3,"_");
    console.log(remove_charAT3);

    question_word="<h4 id='word_display'>Q." +remove_charAT3+"</h4>";
    input_box="<br>answer: <input type='text' id='input_check_box'>";
    checkbutton="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";

    row=question_word+input_box+checkbutton;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value=" ";

     

}