
function page3Create(){
    var scene3 = new createjs.Container();
    scene3.name = "page3";

    scene3.data = {};
    scene3.data.tTimer = 0;
    scene3.data.tData = "New Zealand's rate of greenhouse gas emissions has been consistently \n" + 
    "high compared to other developed countries, with each person \n" + 
    "emitting 17.5 Tonnes of C02 equivalent gases." ;
    scene3.data.tIndex = 0;
    scene3.data.tText = new createjs.Text("", "22px Verdana", "#000000");
    scene3.data.tText.x = 10;
    scene3.data.tText.y = 20;
    scene3.data.fTimer = 0;
    scene3.data.alpha = 1;
 
    scene3.textData = {};
    scene3.textData.tDTwo = "New Zealands net emissions increased by 64.9% compared with \n" + 
    "1990, these emissions included agriculture, automotive, \n" +
    "energy, and foresty emissions.";
    scene3.textData.tDText = new createjs.Text("", "22px Verdana", "#000000");
    scene3.textData.tDText.x = 20;
    scene3.textData.tDText.y = 20;
    scene3.textData.tDTimer = 0;
    scene3.textData.tDIndex = 0; 

    scene3.textThreeData = {};
    scene3.textThreeData.tDTwo = "The increased temperatures are causing higher land and \n" + 
    "sea temperatures, meaning less rainfall and more drought";
    scene3.textThreeData.tDText = new createjs.Text("", "22px Verdana", "#000000");
    scene3.textThreeData.tDText.x = 20;
    scene3.textThreeData.tDText.y = 20;
    scene3.textThreeData.tDTimer = 0;
    scene3.textThreeData.tDIndex = 0; 


    scene3.final = {};
    scene3.final.tTimer = 0;
    scene3.final.tData = "All information was gathered from the Ministry for the Environment";
    scene3.final.tIndex = 0;
    scene3.final.tText = new createjs.Text("", "16px Verdana", "#000000");
    scene3.final.tText.x = 130;
    scene3.final.tText.y = 580;
    scene3.final.fTimer = 0;

    
    scene3.animateText = function(event){
        if (scene3.data.tTimer < createjs.Ticker.getTime()){
            scene3.data.tTimer = createjs.Ticker.getTime() + 50;
            if (scene3.data.tIndex < scene3.data.tData.length){
                scene3.data.tText.text = scene3.data.tText.text + scene3.data.tData[scene3.data.tIndex];
                scene3.data.tIndex = scene3.data.tIndex + 1; 
            }
        }
    }; 

    scene3.animateTextTwo = function(event){     
        if (scene3.textData.tDTimer < createjs.Ticker.getTime()){
            scene3.textData.tDTimer = createjs.Ticker.getTime() + 50;
            if (scene3.textData.tDIndex < scene3.textData.tDTwo.length){
                scene3.textData.tDText.text = scene3.textData.tDText.text + scene3.textData.tDTwo[scene3.textData.tDIndex];
                scene3.textData.tDIndex = scene3.textData.tDIndex + 1;                
            }
        }    
    }; 

    scene3.animateTextThree = function(event){     
        if (scene3.textThreeData.tDTimer < createjs.Ticker.getTime()){
            scene3.textThreeData.tDTimer = createjs.Ticker.getTime() + 50;
            if (scene3.textThreeData.tDIndex < scene3.textThreeData.tDTwo.length){
                scene3.textThreeData.tDText.text = scene3.textThreeData.tDText.text + scene3.textThreeData.tDTwo[scene3.textThreeData.tDIndex];
                scene3.textThreeData.tDIndex = scene3.textThreeData.tDIndex + 1;                
            }
        }    
    }; 

    scene3.animateTextFour = function(event){
        if (scene3.final.tTimer < createjs.Ticker.getTime()){
            scene3.final.tTimer = createjs.Ticker.getTime() + 0;
            if (scene3.final.tIndex < scene3.final.tData.length){
                scene3.final.tText.text = scene3.final.tText.text + scene3.final.tData[scene3.final.tIndex];
                scene3.final.tIndex = scene3.final.tIndex + 1; 
            }
        }
    }; 

   
   

    setTimeout(waitText, 14000)
    function waitText(){   
            scene3.addEventListener("tick", scene3.animateTextTwo); 
            scene3.addChild(scene3.textData.tDText);   
    }

    setTimeout(holdText, 26000)
    function holdText(){
        scene3.addEventListener("tick", scene3.animateTextThree); 
        scene3.addChild(scene3.textThreeData.tDText);   
    }

    setTimeout(removeChild1, 24000)
    function removeChild1(){
        createjs.Tween.get(scene3.textData.tDText)
        .to({alpha:0}, 3000)
    }

    setTimeout(removeChild, 12000)
    function removeChild(){
        createjs.Tween.get(scene3.data.tText)
        .to({alpha:0}, 2000)
    }

    scene3.addEventListener("tick", scene3.animateTextFour);
    scene3.addChild(scene3.final.tText)
    createjs.Tween.get(scene3.final.tText)
    .to({alpha:0.5})

    var smokeGroup = new createjs.Container();
    var smokeGroup2 = new createjs.Container();
    var smokeGroup3 = new createjs.Container();
   
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

    /*
    Tween used to lift the anvil up into the air, lots of timing involved
    */
    var smokeSpriteSheet = new createjs.SpriteSheet(spread);
    var spriteSmoke = new createjs.Sprite(smokeSpriteSheet, "run");

    spriteSmoke.x = 300;
    spriteSmoke.y = 800;

    //using this to transition out the anvil
    createjs.Tween.get(spriteSmoke)
        .call(function(){
            spriteSmoke.gotoAndPlay("moving");
        })
        .wait(8000)
        .to({y: 450}, 3000)
        .wait(1000)
        .to({y:-1000}, 3000, createjs.Ease.circin)
        
     scene3.addChild(spriteSmoke);



     /*
     This section is dedicated to the creation and animation of the trees on screen,
     I was trying to show the large increase of emissions, with a play on a bar chart, with
     the idea that it was also showing one of the environmental factors from forestry
     */
     var tree1 = new createjs.Shape;
     var tree2 = new createjs.Shape;
     var tree3 = new createjs.Shape;
     var tree4 = new createjs.Shape;
     var tree5 = new createjs.Shape; 

     tree1.graphics.beginFill("brown").drawRect(0,0,20,200,2,2,2,2);
     tree2.graphics.beginFill("brown").drawRect(0,0,20,300,2,2,2,2);
     tree3.graphics.beginFill("brown").drawRect(0,0,20,400,2,2,2,2);
     tree4.graphics.beginFill("brown").drawRect(0,0,20,500,2,2,2,2);
     tree5.graphics.beginFill("brown").drawRect(0,0,20,600,2,2,2,2);


        tree1.x = 50;
        tree1.y = 600;
        tree1.regX = 20;
        tree1.regY = 200;
        tree1.alpha = 0;

        tree2.x = 150;
        tree2.y = 600;
        tree2.regX = 20;
        tree2.regY = 300;
        tree2.alpha = 0;

        tree3.x = 250;
        tree3.y = 600;
        tree3.regX = 20;
        tree3.regY = 400;
        tree3.alpha = 0;

        tree4.x = 350;
        tree4.y = 600;
        tree4.regX = 20;
        tree4.regY = 500;
        tree4.alpha = 0;

        tree5.x = 450;
        tree5.y = 600;
        tree5.regX = 20;
        tree5.regY = 600;
        tree5.alpha = 0;

     createjs.Tween.get(tree1)
        .wait(19000)
        .to({alpha: 1}, 1000)
        .to({rotation:80, rotationDir: 1}, 2000, createjs.Ease.circin)

    createjs.Tween.get(tree2)
        .wait(19000)
        .to({alpha: 1}, 1000)
        .to({rotation:85, rotationDir: 1}, 2000, createjs.Ease.circin)

        createjs.Tween.get(tree3)
        .wait(19000)
        .to({alpha: 1}, 1000)
        .to({rotation:80, rotationDir: 1}, 2000, createjs.Ease.circin)

        createjs.Tween.get(tree4)
        .wait(19000)
        .to({alpha: 1}, 1000)
        .to({rotation:80, rotationDir: 1}, 2000, createjs.Ease.circin)

        createjs.Tween.get(tree5)
        .wait(19000)
        .to({alpha: 1}, 1000)
        .to({rotation:80, rotationDir: 1}, 2000, createjs.Ease.circin)


    

     scene3.addChild(tree1);
     scene3.addChild(tree2);
     scene3.addChild(tree3);
     scene3.addChild(tree4);
     scene3.addChild(tree5);
   
    /*
    I utilised this code from MarkNikoras' code example in class (fishGroup).
    Creates the smoke clouds at the beginning of the page creation
    */
    for(var i = 0; i < 5; i++){
        // create a smoke bitmap object with a random location
        var smoke = new createjs.Bitmap(queue.getResult("singleSmoke"));
        smoke.x = Math.floor((Math.random() * 250) - 1);
        smoke.y = Math.floor((Math.random() * 150) - 1);
        // set registration point to be middle of smoke
        smoke.regX = 37.5; smoke.regY = 20;
        // set smoke size to random size using scaleX and scaleY properties
        var r1 = Math.random(0.5)+0.5;
        var r2 = r1 * 0.9;
        var r3 = Math.floor((Math.random() * 200));
        smoke.scaleX = r1; smoke.scaleY = r1;
        // animate the smokees width with tween
        createjs.Tween.get(smoke, { loop: true })
          .to({scaleX: r2}, 300 + r3, createjs.Ease.linear)
          .to({scaleX: r1}, 300 + r3, createjs.Ease.linear);
        smokeGroup.addChild(smoke);
      }
      // position smokegroup completely off to left of stage visible area
      smokeGroup.x = -300;
      smokeGroup.y = 0;
      // tween the smokes horizontal property
      smokeTween = createjs.Tween.get(smokeGroup, {loop: false, stop: true})
        .to({x: 800}, 12000, createjs.Ease.linear);
      smokeTween2 = createjs.Tween.get(smokeGroup, {loop: false, stop: true})
      .to({y: 500}, 12000, createjs.Ease.sineInOut);
      scene3.addChild(smokeGroup);



      for(var i = 0; i < 5; i++){
        // create a smoke bitmap object with a random location
        var smoke = new createjs.Bitmap(queue.getResult("singleSmoke"));
        smoke.x = Math.floor((Math.random() * 250) - 1);
        smoke.y = Math.floor((Math.random() * 150) - 1);
        // set registration point to be middle of smoke
        smoke.regX = 37.5; smoke.regY = 20;
        // set smoke size to random size using scaleX and scaleY properties
        var r1 = Math.random(0.5)+0.5;
        var r2 = r1 * 0.9;
        var r3 = Math.floor((Math.random() * 200));
        smoke.scaleX = r1; smoke.scaleY = r1;
        // animate the smokees width with tween
        createjs.Tween.get(smoke, { loop: true })
          .to({scaleX: r2}, 300 + r3, createjs.Ease.linear)
          .to({scaleX: r1}, 300 + r3, createjs.Ease.linear);
        smokeGroup2.addChild(smoke);
      }
      // position smokegroup completely off to left of stage visible area
      smokeGroup2.x = 900;
      smokeGroup2.y = 600;
      // tween the smokes horizontal property
      smoke2Tween = createjs.Tween.get(smokeGroup2, {loop: false, stop: true})
        .to({x: -200}, 12000, createjs.Ease.linear);
      smoke2Tween2 = createjs.Tween.get(smokeGroup2, {loop: false, stop: true})
      .to({y: -500}, 12000, createjs.Ease.sineInOut);
      scene3.addChild(smokeGroup2);

    

      for(var i = 0; i < 5; i++){
        // create a smoke bitmap object with a random location
        var smoke = new createjs.Bitmap(queue.getResult("singleSmoke"));
        smoke.x = Math.floor((Math.random() * 250) - 1);
        smoke.y = Math.floor((Math.random() * 150) - 1);
        // set registration point to be middle of smoke
        smoke.regX = 37.5; smoke.regY = 20;
        // set smoke size to random size using scaleX and scaleY properties
        var r1 = Math.random(0.5)+0.5;
        var r2 = r1 * 0.9;
        var r3 = Math.floor((Math.random() * 200));
        smoke.scaleX = r1; smoke.scaleY = r1;
        // animate the smokees width with tween
        createjs.Tween.get(smoke, { loop: true })
          .to({scaleX: r2}, 300 + r3, createjs.Ease.linear)
          .to({scaleX: r1}, 300 + r3, createjs.Ease.linear);
        smokeGroup3.addChild(smoke);
      }
      // position smokegroup completely off to left of stage visible area
      smokeGroup3.x = -400;
      smokeGroup3.y = 600;
      // tween the smokes horizontal property
      smoke3Tween = createjs.Tween.get(smokeGroup3, {loop: false, stop: true})
        .to({x: 800}, 12000, createjs.Ease.linear);
      smoke3Tween2 = createjs.Tween.get(smokeGroup3, {loop: false, stop: true})
      .to({y: -500}, 12000, createjs.Ease.sineInOut);
      scene3.addChild(smokeGroup3);
   


      var weight = new createjs.Bitmap(queue.getResult("weight"));
      weight.x = 100;
      weight.y = -800;


      //drops in to show the weight of C02 emissions
      //smoke pushes it out with timed animation
      setTimeout(dropWeight, 6500)
      function dropWeight(){
        createjs.Tween.get(weight)
        .to({scaleX: 1.5, scaleY: 1.5})
        .to({y:200}, 2000, createjs.Ease.circin)
        .wait(3500)
        .to({y: -1000}, 3000, createjs.Ease.circin)
      scene3.addChild(weight);
    }

      scene3.addEventListener("tick", scene3.animateText);  
      scene3.addChild(scene3.data.tText); 
  
    return scene3;
}




 