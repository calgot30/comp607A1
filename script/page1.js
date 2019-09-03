
/*
This page is the 'home screen' of the activities, from here you can click on
the different sprites to take you to their related pages

Note: I had some issues regarding the click events on the other pages so
you cannot go back to this page from those pages, to get back to here you
need to refresh the content and then begin again.
*/
function page1Create(){
    /*
    all of the text content is created here, I used Mark Nikoras' example code
    from his 'smart cities' example to dynamically generate all the text on screen.

    There are functions which delay the text from being displayed all at once
    */
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
    

  
        //spritesheet info for the water-pollution sprite
        var info = {
            images: [queue.getResult("water")],
    
            frames: {width:200, height:150, count:4, spacing:0, margin:0},
            animations: {
                dripping:{
                    frames:[0,1,2,3,2,1],
                    speed:0.08
                }
            }
       
        }
     


    //declaring the NZ image I drew in gimp
    var imgNZ = new createjs.Bitmap(queue.getResult("nz_capture"));

    //sprite declaration for the water sprite
    var imgWater = new createjs.SpriteSheet(info);
    var waterSprite = new createjs.Sprite(imgWater, "run");

        waterSprite.x = 80;
        waterSprite.y = 120;

    //running its action
    createjs.Tween.get(waterSprite)
    .call(function(){
        waterSprite.gotoAndPlay("dripping");
    })

    //spritesheet info for the smoke cloud
    var spread = {
        images: [queue.getResult("Smoke")],

        frames: {width:200, height:150, count:8, spacing:0, margin:0},
        animations: {
            moving:{
                frames:[0,1,2,3,4,5,6,7,6,5,4,3,2,1],
                speed:0.1
            }
        }
   
    }

    //declaring the smoke cloud sprite and calling its action
    var imgSmoke = new createjs.SpriteSheet(spread);
    var smokeSprite = new createjs.Sprite(imgSmoke, "run");

        smokeSprite.x = 475;
        smokeSprite.y = 375;

    createjs.Tween.get(smokeSprite)
    .call(function(){
        smokeSprite.gotoAndPlay("moving");
    })

   
   
   
   
   
   //I was going to have a 3rd page but due to time constraints and the
   //overall large scope of my topic I decided to omit this
    //var imgRubbish = new createjs.Shape();

    


    //test images for position, I replaced these with the sprites on screen
    //imgRubbish.graphics.beginFill("yellow").drawCircle(650,150,30);
    //imgCar.graphics.beginFill("blue").drawRect(550,450,50,50,2,2,2,2);
    //imgCow.graphics.beginFill("red").drawCircle(150,220,30);
    
    //changing nz image transparency and position and scale
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
    waterSprite.addEventListener("click",  
    function goToURLC(){
        sceneDestroy(scene);
        sindex = 1;
        sceneCreator(sindex);
      });

    smokeSprite.addEventListener("click",  function goToURLD(){
        sceneDestroy(scene);
        sindex = 2;
        sceneCreator(sindex);
    });

    setTimeout(createChild, 6000);

    scene.addEventListener("tick", scene.animateText);     
    scene.addChild(scene.data.tText);  
    scene.addChild(imgNZ);
    scene.addChild(waterSprite);
    scene.addChild(smokeSprite);
     //scene.addEventListener("tick", scene.animateTextTwo); 
    //scene.addChild(scene.textData.tDText);
    //scene.addChild(imgRubbish);
  
    
    //a janky workaround to be able to use the setTimeout() function on an event listener,
    //the countdown is set as soon as the page is loaded.
    function createChild(){
        scene.addEventListener("tick", scene.animateTextTwo); 
        scene.addChild(scene.textData.tDText);   
    }

    // 
    return scene;
}

