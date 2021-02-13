class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gState');
      gameStateRef.on("value",function(data){
         gState = data.val();
      })
     
    }

    update(state){
        database.ref('/').update({
          gState: state
        });
      }
    
      async start(){
        if(gState === 0){
          contestant = new Contestant();
          var cCountRef = await database.ref('cCount').once('value');
          if(cCountRef.exists()){
           cCount=cCountRef.val();
            contestant.getCount();
          }
          question = new Question();
          question.display();
        }
    }

        play(){
            question.hide();
            background(bg);
            var display_position=100;
            fill(255);
            textSize(30);
            text("Result of the Quiz", 320,40);
            //text("----------------------------",320,65);
            
            Contestant.getContestantInfo();
            if(allContestants!==undefined){
                
                for(var plr in allContestants){
                    var cAns="2";
                if(cAns === allContestants[plr].answer)
                fill("lightGreen");
                else
                fill("pink");
                textSize(20);
                display_position=display_position+50;
                text(allContestants[plr].name , 250,display_position);
                text(allContestants[plr].answer, 600,display_position);
                }
                fill("white")
                text("Note:- The Contestants who have given Correct Answer are Marked with Green Color.",50,360);          
            }
          }
        
      
} 