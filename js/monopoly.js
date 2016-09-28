
/* The monopoly logic class */

var scores = new Vue({
    el: '#app',
    data: {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0,
    }
});

var updateScores = function(received) {
    
    scores.player1 = received.player1;
    scores.player2 = received.player2;
    scores.player3 = received.player3;
    scores.player4 = received.player4;
    
};

var updateScore = function() {
    
    scores.player1 = scores.player1+1;
    scores.player2 = scores.player2+1;
    scores.player3 = scores.player3+1;
    scores.player4 = scores.player4+1;
};

$(document).click(function(){
       $.post("http://localhost:8010/", JSON.stringify({ player1: scores.player1, player2: scores.player2,  player3: scores.player3, player4: scores.player4 })
        );
    
        $.get("http://localhost:8010/", function(data){
            received = data;
            updateScores(received);
            updateScore();
        }).fail(function(err){
            alert("Failed");
            alert(JSON.stringify(err));
        });
    });





