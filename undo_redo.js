
class Delta {
    
    constructor(){
        //this.object=object
        this.history = [];
        this.position = -1;
    }

    fetchDeltaUndo() {
     if(this.position==0){
        this.position-=1;
        print("empty array")
     }else if(this.position>0){
        this.position-=1
        return this.history[this.position]  // Finally it will be converse
                
     }
        
    }

    fetchDeltaRedo(){

        if(this.position<this.history.length){
            this.position+=1
            return this.history[this.position]
        }

    }

    insertNewDelta(object){
        if(this.history.length==0){
           this.history.push(object)
           this.position++;
           return
        }

        if(this.position<this.history.length){
            this.history = this.history.slice(0, this.position + 1)
        }

        this.history.push(object)
        this.position+=1
    }

    

    

}

const obj = new Delta()
obj.insertNewDelta(1);
obj.insertNewDelta(2);
obj.insertNewDelta(3)
obj.insertNewDelta(4)
obj.insertNewDelta(5)
obj.insertNewDelta(6)
console.log(obj.history)
console.log(obj.fetchDeltaUndo());
console.log(obj.fetchDeltaUndo());
console.log(obj.history)
obj.insertNewDelta(7)
console.log(obj.history)
console.log(obj.fetchDeltaUndo());
console.log(obj.history)
console.log(obj.fetchDeltaRedo());
console.log(obj.history)
