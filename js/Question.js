class Question {
    constructor() {
      this.title = createElement('h1');
      this.question = createElement('h3');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
      this.input1 = createInput("Enter Your Name");
      this.input2 = createInput("Enter Correct Option");
      this.input3 = createInput("Any Feedback");
      this.button = createButton('Submit');
      this.note = createElement('h3');
    }
  
    hide(){
      this.title.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.button.hide();
      this.note.hide();
    }
  
    display(){
      this.title.html("The Quiz Game");
      this.title.position(330, 10);

      this.question.html("Question:- What starts and ends with the Letter 'E', but has only One Letter?");
      this.question.position(130, 80);

      this.option1.html("1: Everyone");
      this.option1.position(130, 120)

      this.option2.html("2: Envelope");
      this.option2.position(130, 160)

      this.option3.html("3: Estimate");
      this.option3.position(130, 200)

      this.option4.html("4: Example");
      this.option4.position(130, 240)
      
      this.input1.position(130, 300);
      this.input2.position(330, 300);
      this.input3.position(530, 300);

      this.button.position(385, 340);

      this.note.html("NOTE: Enter the Correct Option in the Form of Numbers (1,2,3,4)");
      this.note.position(130, 360);  

      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button.hide();
        this.note.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        cCount+=1;
        contestant.index = cCount;
        contestant.update();
        contestant.updateCount(cCount);
      })
    }
  }
  