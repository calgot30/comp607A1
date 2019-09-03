var stage;
var queue;
var scenes = [];
var sindex;

/*
This is the main page that runs the separate scenes for my project, because
I had some issues with getting my array to work correctly with my functions
I had to omit the idea of having all of my pages go back to the home
page, so this means to view all of the separate pages you have to
regresh the web page and click on each one separately, apologies for
any inconvenience.

Note: All images you are seeing I drew in GIMP
*/

function init(){
    stage = new createjs.Stage("stageCanvas");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    preload();
}

//Pre-load all of the image assets into the queue
function preload(){
    queue = new createjs.LoadQueue();
        queue.loadFile({id:"nz_capture", src:"assets/nz _capture.png"});
        queue.loadFile({id:"River", src:"assets/River Spritesheet.png"});
        queue.loadFile({id:"algae", src:"assets/AlgaeDots.png"});
        queue.loadFile({id:"Button", src:"assets/BackButton.png"});
        queue.loadFile({id:"Smoke", src:"assets/SmokeSpritesheet.png"});
        queue.loadFile({id:"water", src:"assets/WaterPollutionSpritesheet.png"});
        queue.loadFile({id:"singleSmoke", src:"assets/SingleSmoke.png"});
        queue.loadFile({id:"weight", src:"assets/Weight.png"});

        queue.addEventListener("complete", main);
}

//first clears the screen of any possible scenes, then loads accordingly
//and then begins the display at the first entry in the array
function main(){
    
   stage.removeAllChildren();
   scenes.push(page1Create());
   scenes.push(page2Create());
   scenes.push(page3Create());
   scenes.push(page4Create());
   sindex = 0;
   stage.addChild(scenes[sindex]);  
}

/*
Takes sindex as an arg and recreates all of the scenes in the scene array.
Then puts the corresponding stage on screen that relates to the sindex value.
*/
function sceneCreator(sindex){
    stage.removeAllChildren();
    scenes.push(page1Create());
    scenes.push(page2Create());
    scenes.push(page3Create());
    scenes.push(page4Create());
    stage.addChild(scenes[sindex]);
    //init();
    //preload();
}

//clears the scene from the stage and takes away all event listeners
function sceneDestroy(scene){
    scene.removeAllEventListeners();
    scene.removeAllChildren();
    scene.data = null;
}