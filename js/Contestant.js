class Contestant {
    constructor(){
      this.index=null;
      this.answer=0;
      this.name=null;
    }
  
    getCount(){
      var cCountRef = database.ref('cCount');
      cCountRef.on("value",function(data){
        cCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        cCount: count
      });
    }
  
    update(){
      var cIndex = "contestants/contestant" + this.index;
      database.ref(cIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
    

    static getContestantInfo(){
      var cInfoRef = database.ref('contestants');
      cInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  