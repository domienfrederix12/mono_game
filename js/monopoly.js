
/* The monopoly logic class */


// the main state of the local game
var state = new Vue({
    el: '#app',
    data: {
        selectedplayer: 0,
        player1selected : false,
        player2selected : false,
        player3selected : false,
        player4selected : false,
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0,
    },
    methods: {
        setPlayer: function(playerNumber){
          $("#start").hide()
          $("#board").show()
          state.selectedplayer = playerNumber
        }
      
    }
});

// create data 
var createData = function () {

        var data = {
            selectedplayer : state.selectedplayer,
            player1selected : state.player1selected,
            player2selected : state.player2selected,
            player3selected : state.player3selected,
            player4selected : state.player4selected,
            player1: state.player1,
            player2: state.player2,
            player3: state.player3,
            player4: state.player4 
        };
    
      return data;
}


// A function to update the scores of the players

var updateState = function(received) {
    
    state.player1selected = received.player1selected;
    state.player2selected = received.player2selected;
    state.player3selected = received.player3selected;
    state.player4selected = received.player4selected;
    state.player1 = received.player1;
    state.player2 = received.player2;
    state.player3 = received.player3;
    state.player4 = received.player4;
    
};


$(document).ready(function(){
    
       getDataFromServer();
       
    });

$(document).click(function(){
    
       postDataToServer(createData());    
       getDataFromServer();
    
    });



var postDataToServer = function(data) {
    
     var json = JSON.stringify(data);
     $.post("http://localhost:8010/", json);
    
}


var getDataFromServer =  function() {
    
     $.get("http://localhost:8010/", function(data){
            received = data;
            updateState(received);
        }).fail(function(err){
            alert("Failed");
            alert(JSON.stringify(err));
        });
    
}


$("#collect").on("click", function(){
    
    switch(state.selectedplayer) {
    case 1:
        state.player1 = state.player1 + 400;
        break;
    case 2:
        state.player2 = state.player2 + 400;
        break;
    case 3:
        state.player3 = state.player3 + 400;    
        break;
    case 4:
        state.player4 = state.player4 + 400;           
        break;        
    default:
        break;
}
    
});

window.setInterval(function(){
     postDataToServer(createData());
     getDataFromServer();
}, 1000);



// main method





