
function page1Create(){
    var scene = new createjs.Container();
    scene.name = "page1";
    scene.data = {};
    scene.data.tTimer = 0;
    scene.data.tData = "Although New Zealand portrays itself as a clean and green country, \nit has " + 
    "its issues just like the rest of the world, this website explains\nto you the problems that " +
    "New Zealand has with pollution.";
    scene.data.tIndex = 0;
    scene.data.tText = new createjs.Text("", "22px Verdana", "#000000");
    scene.data.tText.x = 20;
    scene.data.tText.y = 20;
    scene.data.finished = false;
    scene.data.fTimer = 0;




    scene.textData = {};
    scene.textData.tDTwo = "Click on the pictures to find out how they are affecting New Zealand";
    scene.textData.tDText = new createjs.Text("", "22px Verdana", "#000000");
    scene.textData.tDText.x = 20;
    scene.textData.tDText.y = 550;
    scene.textData.tDTimer = 0;
    scene.textData.finished = false;
    scene.textData.tDIndex = 0; 

    //scene.data.


     scene.animateText = function(event){
        if (scene.data.tTimer < createjs.Ticker.getTime()){
            scene.data.tTimer = createjs.Ticker.getTime() + 30;
            if (scene.data.tIndex < scene.data.tData.length){
                scene.data.tText.text = scene.data.tText.text + scene.data.tData[scene.data.tIndex];
                scene.data.tIndex = scene.data.tIndex + 1; 
                if(scene.data.tDIndex == scene.data.tData.length){
                    scene.data.finished = true;   
                }           
            }
        }
    }; 

    

   
        scene.animateTextTwo = function(event){     
            if (scene.textData.tDTimer < createjs.Ticker.getTime()){
                scene.textData.tDTimer = createjs.Ticker.getTime() + 50;
                if (scene.textData.tDIndex < scene.textData.tDTwo.length){
                    scene.textData.tDText.text = scene.textData.tDText.text + scene.textData.tDTwo[scene.textData.tDIndex];
                    scene.textData.tDIndex = scene.textData.tDIndex + 1;                
                }
            }    
        }; 
    

  

    
     

    var imgNZ = new createjs.Bitmap(queue.getResult("nz_capture"));
    var imgCow = new createjs.Shape();
    var imgCar = new createjs.Shape();
    var imgRubbish = new createjs.Shape();

    imgRubbish.graphics.beginFill("yellow").drawCircle(650,150,30);
    imgCar.graphics.beginFill("blue").drawRect(550,450,50,50,2,2,2,2);
    imgCow.graphics.beginFill("red").drawCircle(150,220,30);
    
    
    imgNZ.alpha = 0.5;
    imgNZ.x = -50;
    imgNZ.y = 30;
    imgNZ.scaleX = 0.88;
    imgNZ.scaleY = 0.88;


    
   
    /*
    These click events change the sindex to the correct value for the 
    corresponding page they are related to.  They call the sceneCreator()
    function and give sindex as an argument. 

    These methods all call sceneDestroy to wipe the canvas clean and keep it 
    running smoothly
    */
    imgCow.addEventListener("click",  
    function goToURLC(){
        sceneDestroy(scene);
        sindex = 1;
        sceneCreator(sindex);
      });

    imgCar.addEventListener("click",  function goToURLD(){
        sceneDestroy(scene);
        sindex = 2;
        sceneCreator(sindex);
    });

    imgRubbish.addEventListener("click", function goToURLE(){
        sceneDestroy(scene);
        sindex = 3;
        sceneCreator(sindex);
    });


    scene.addEventListener("tick", scene.animateText);  
    scene.addEventListener("tick", scene.animateTextTwo);   
    scene.addChild(scene.data.tText);   
    scene.addChild(scene.textData.tDText);
    scene.addChild(imgNZ);
    scene.addChild(imgCow);
    scene.addChild(imgCar);
    scene.addChild(imgRubbish);
  
    
   

    // 
    return scene;
}

