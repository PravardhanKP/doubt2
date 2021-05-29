class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    //write code to change the background color here
    for(var prl in allContestants){
      var correctAns = "1"
      if(correctAns === allContestants[prl].answer){
      fill("Green");
     // else
       // fill("red")
      
      }
    }
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    if(contestantCount !==undefined){
      fill ("Blue");
      textSize(20);
      text("*Note:Contestants who answred correct are highlited in green colour")
    }
    //write condition to check if contestantInfor is not undefined
    if(contestant.answer ==='1'){
      setBackground("Green");
    }else if(contestant.answer ==='2'){
      setBackground("red");
    }else if(contestant.answer ==='3'){
      setBackground("red")
    }else if(contestant.answer ==='4'){
      setBackground("red")
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    //contestantCount

  }
}