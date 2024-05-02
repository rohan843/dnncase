function RawData(inp){

    return{
        "imports": "",
        "execution": "",
        "return":  inp

    }
}

function GetTunableFromList(val){

    return{
        "imports": "",
        "execution": "",
        "return": `hp.Int(value=${val})`
    }
}

function GetTunableInt(value){

    return{
        "imports": "",
        "execution": "",
        "return": "hp.Choice('learning_rate'," + "values= " + value + ")"
    }
}

function Input(shape){
    return{
        "imports": ["from keras.layers import Input"],
        "execution": "",
        "return": "Input(" + "shape = " + shape + ")"
    }
}

function Flatten(){

    return{
        "imports": "from keras.layers import Flatten",
        "execution": "",
        "return": "Flatten()"
    }

}

function CreateAndApplyDenseLayer(units,payload){

    return{
        "imports": "from keras.layers import Dense",
        "execution": "",
        "return": "Dense(" + units + ")(" + payload + ")"
    }

}

function GenerateAdamOptimizer(learning_rate){

    return{
        "imports": "",
        "execution": "",
        "return": "keras.optimizers.Adam(learning_rate = " + learning_rate + ")" 
    }

}

function CompileModel(model,optimizers,loss,metrics) {

    return{
        "imports": "",
        "execution": model + ".compile(" + "optimizer =" + optimizers +", loss =" + loss + ", metrics =" + metrics + ")",
        "return": model 
    }


}

function divide(x,y) {

    return{
        "imports": "",
        "execution": "",
        "return": "tf.divide(" + x +"," + y +")"
    }


}

function add(x,y) {

    return{
        "imports": "",
        "execution": "",
        "return": "tf.add(" + x +"," + y +")"
    }


}
function subtract(x,y) {

    return{
        "imports": "",
        "execution": "",
        "return": "tf.subtract(" + x +"," + y +")"
    }


}

function loadKerasDataset() {

    return{
        "imports": "",
        "execution": "mnist = keras.dataset.mnist",
        "return": "mnist.load_data()"
    }


}

function getBestModelTuning() {

    return{
        "imports": "",
        "execution": "",
        "return": ""
    }


}


function evaluateModel() {

    return{
        "imports": "",
        "execution": "",
        "return": ""
    }


}

function reshape(shape) {

    return{
        "imports": "",
        "execution": "",
        "return": "layers.reshape(" + shape + ")"
    }


}
function shuffle() {

    return{
        "imports": "",
        "execution": "",
        "return": ".shuffle()"
    }


}
function batch(batch) {

    return{
        "imports": "",
        "execution": "",
        "return": ".batch("+ batch + ")"
    }


}
function BinaryCrossentropy(batch) {

    return{
        "imports": "",
        "execution": "",
        "return": "tf.keras.losses.BinaryCrossentropy(from_logits=True)"
    }

}

function ones_like(value) {

    return{
        "imports": "",
        "execution": "",
        "return": "tf.ones_like(" + value + ")"
    }
}

function zeros_like(value) {

    return{
        "imports": "",
        "execution": "",
        "return": "tf.zeros_like(" + value + ")"
    }


}

function gradientTape(){
    return{
        "imports": "",
        "execution": "",
        "return": "tf.GradientTape()"
    }

}


export {GenerateAdamOptimizer,CreateAndApplyDenseLayer,Flatten,Input,GetTunableInt,GetTunableFromList,RawData,gradientTape,zeros_like,ones_like,add,subtract,divide,BinaryCrossentropy,batch,shuffle,reshape,evaluateModel,getBestModelTuning,loadKerasDataset,CompileModel};

