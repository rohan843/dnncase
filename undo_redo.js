
class Undo_Redo_Delta_Archiver {
    
    constructor(){
        //this.object=object
        this.history = [];
        this.position = -1;
    }

    fetchDeltaUndo() {
     if(this.position==0){
        this.position-=1;
        return null;
     }
     if(this.position>0){
        let curr_obj=this.history[this.position].conjugate()
        this.position-=1
        return curr_obj
                
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

