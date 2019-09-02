
function page2Create(){
    var scene = new createjs.Container();
   /*  scene.name = "page2";
    scene.data = {};
    scene.data.tTimer = 0;
    scene.data.tData = "Although New Zealand portrays itself as a clean and green country, \nit has " + 
    "its issues just like the rest of the world, this website explains\nto you the problems that " +
    "New Zealand has with pollution."; */

/*     scene.data.tDTwo = "Click on the pictures to find out how they are affecting New Zealand"
    scene.data.tIndex = 0;
    scene.data.tText = new createjs.Text("", "22px Verdana", "#000000");
    scene.data.tText.x = 20;
    scene.data.tText.y = 20;
    scene.data.finished = false;
    scene.data.fTimer = 0;
 */
/* 
    scene.animateText = function(event){
        if (scene.data.tTimer < createjs.Ticker.getTime()){
            scene.data.tTimer = createjs.Ticker.getTime() + 50;
            if (scene.data.tIndex < scene.data.tData.length){
                scene.data.tText.text = scene.data.tText.text + scene.data.tData[scene.data.tIndex];
                scene.data.tIndex = scene.data.tIndex + 1;                
            }
        }
    };

    scene.animateTextTwo = function(event){

    }; */
    
    var imgNZ = new createjs.Bitmap(queue.getResult("nz_capture"));
    var imgCow = new createjs.Shape();
    var imgCar = new createjs.Shape();
    var imgRubbish = new createjs.Shape();

    imgRubbish.graphics.beginFill("yellow").drawCircle(650,150,30);
    imgCar.graphics.beginFill("blue").drawRect(550,450,50,50,2,2,2,2);
    imgCow.graphics.beginFill("red").drawCircle(150,220,30);
    
    

    imgNZ.x = -50;
    imgNZ.y = 30;
    //scene.sendBackwards(imgNZ);
    imgNZ.scaleX = 0.88;
    imgNZ.scaleY = 0.88;

    
    
    imgCow.addEventListener("click", function(event) { alert("clicked")});
    //var result = imgCow.link(page2.js);
    imgCar.addEventListener("click", function(event) { alert("clicked"); });
    imgRubbish.addEventListener("click", function(event) { alert("clicked"); });
    //scene.addEventListener("tick", scene.animateText);    
    //scene.addEventListener("tick", animateTextTwo);
    //scene.addChild(scene.data.tText);   
    scene.addChild(imgNZ);
    scene.addChild(imgCow);
    scene.addChild(imgCar);
    scene.addChild(imgRubbish);

    
    return scene;
}