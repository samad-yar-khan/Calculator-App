var buffer = 0;
var textBuffer="";
var op1 = "";

var screen = document.getElementById("calculatorScreen")
var keys = document.querySelectorAll(".key");


//checking operators


function calculating_op(){
    console.log(element_id.id);
}

function operation(val) {

    //parsing the val into a strig and checking edge ca

    //main
    if(val =="reset"){
        buffer = 0 ;
        screen.innerText = "";
        op1="";
    }else if(val == "signChange"){
        // buffer = -1*buffer;
        if(screen.innerText.length==0){
            screen.innerText=0;
        }
        var temp = -1*eval(screen.innerText);
        screen.innerText=temp;
        op1="-"+op1;

    }else if(val == "percentage"){   
        if(screen.innerText.length==0){
            screen.innerText=0;
        }
        var temp = eval(screen.innerText)/100;
        screen.innerText=temp;
        op1="";
        // buffer = buffer%100;
        // screen.innerText = buffer;
    }else if(val == "="){
        if(screen.innerText.length==0){
            screen.innerText=0;
        }
        buffer = eval(screen.innerText);
        screen.innerText = buffer;

        // textBuffer+=eval(op1);
        // buffer+=eval(textBuffer);
        // screen.innerText=buffer;
    }else if(val=="backSpace" || val=="Backspace"){
        if(screen.innerText.length > 0){
            var temp = screen.innerText;
            temp = temp.substr(0,temp.length - 1);
            screen.innerText=temp;
        }

    }else if(val=="."){
        var temp = screen.innerText;
        if(temp[temp.length-1] != '.'){
            
        screen.innerText+= val;
        op1+=val;}
    }else{

        screen.innerText+= val;
        op1+=val;
        
    }

}

//for events on the main canc key
for(var i = 0 ; i < keys.length ; i++){
    keys[i].addEventListener('click' , function(){
       var val = this.getAttribute('key-value');

        operation(val);
 
       } 
    );
}

//for physical keyboard 

document.addEventListener('keydown' , function(KeyboardEvent){
    var keysPressed = KeyboardEvent.key;
    if(keysPressed == "Control" || keysPressed=="Shift" || keysPressed == "`" ||keysPressed == "Delete" ||  keysPressed=="Tab" || keysPressed == "CapsLock"){
        ;
    }else if(keysPressed=="Enter"){
        operation("=");
    }else if(keysPressed=="Escape"){
        operation("reset");
    } else {
        operation(KeyboardEvent.key);
    }

});

