var stage;
var queue;
var scenes = [];
var sindex;

function init(){
    stage = new createjs.Stage("stageCanvas");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    preload();
}

function preload(){
    queue = new createjs.LoadQueue();
    

        queue.loadFile({id:"nz_capture", src:"assets/nz _capture.png"});
        
 
        queue.addEventListener("complete", main);
}


function main(){
    
   stage.removeAllChildren();
   // sceneCreator();
   scenes.push(page1Create());
   scenes.push(page2Create());
   sindex = 0;
   stage.addChild(scenes[sindex]);
   
   
    
}

// function sceneCreator(){
//     // scenes.push(page1Create());
//     // scenes.push(page2Create());
//     //scenes.push(page3Create());
//     //scenes.push(page4Create());
//     sindex = 0;
//     stage.addChild(scenes[sindex]);
// }

 function nextScene(){
    stage.removeChild(scenes[sindex]);
    sceneDestroy(scenes[sindex]);
    if(sindex < scenes.length){
        console.log("next Scene");
        sindex++;
        stage.addChild(scenes[sindex]);
    }
} 

function sceneDestroy(scene){
    scene.removeAllEventListeners();
    scene.removeAllChildren();
    scene.data = null;
}