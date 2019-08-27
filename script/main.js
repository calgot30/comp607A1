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
    queue.addEventListener('fileload', main);    

    files = ["nz_capture.png"];
    files.forEach(function(item){
        queue.loadFile({id:item, src:"assets/" + item});
    });
}


function main(){
    stage.removeAllChildren();
    scenes.push(scene1Create());
    scenes.push(scene2Create());
    sindex = 1;
    stage.addChild(scenes[sindex]);
}

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
    scene.data=null;
}