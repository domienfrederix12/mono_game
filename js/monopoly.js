

/* The monopoly logic class */

console.log("hello world");

var assignScores = function(){

    $("#scoreplayerone").text(received.playerone);
    $("#scoreplayertwo").text(received.playertwo);
    $("#scoreplayerthree").text(received.playerthree);
    $("#scoreplayerfour").text(received.playerfour);

}

$(document).ready(function(){
        $.get("http://localhost:8010/", function(data){
            alert("Success and data: " + data);
            received = data;
            alert("player 1 score: " + data.playerone);
            assignScores();
        }).fail(function(err){
            alert("Failed");
            alert(JSON.stringify(err));
        });
    });

console.log(received);
