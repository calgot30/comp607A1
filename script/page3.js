
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
    scene3.textData.tDTwo = "The algae then reproduces to excessive levels, causing what \n" + 
    "is known as an 'algal bloom'. These blooms starve the waterways of \n" + 
    "oxygen, killing off any local fish in the water.";
    scene3.textData.tDText = new createjs.Text("", "22px Verdana", "#000000");
    scene3.textData.tDText.x = 20;
    scene3.textData.tDText.y = 20;
    scene3.textData.tDTimer = 0;
    scene3.textData.tDIndex = 0; 

    scene3.textThreeData = {};
    scene3.textThreeData.tDTwo = "Humans are now coming under threat from nitrogen pollution, \n" + 
    "82 percent of New Zealand waterways are now \n" + 
    "deemed 'unsafe for swimming'.";
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

   
    setTimeout(holdText, 36000)
    function holdText(){
        scene3.addEventListener("tick", scene3.animateTextThree); 
        scene3.addChild(scene3.textThreeData.tDText);   
    }

    setTimeout(waitText, 19500)
    function waitText(){   
            scene3.addEventListener("tick", scene3.animateTextTwo); 
            scene3.addChild(scene3.textData.tDText);   
    }

    setTimeout(removeChild1, 34000)
    function removeChild1(){
        createjs.Tween.get(scene3.textData.tDText)
        .to({alpha:0}, 3000)
    }

    setTimeout(removeChild, 17000)
    function removeChild(){
        createjs.Tween.get(scene3.data.tText)
        .to({alpha:0}, 3000)
    }

    scene3.addEventListener("tick", scene3.animateTextFour);
    scene3.addChild(scene3.final.tText)
    createjs.Tween.get(scene3.final.tText)
    .to({alpha:0.5})

    var smokeGroup = new createjs.Container();
    var smokeGroup2 = new createjs.Container();
    var smokeGroup3 = new createjs.Container();
    /*
    I utilised this code from MarkNikoras' code example in class (fishGroup).
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


      
      setTimeout(dropWeight, 6500)
      function dropWeight(){
        createjs.Tween.get(weight)
        .to({scaleX: 1.5, scaleY: 1.5})
        .to({y:200}, 2000, createjs.Ease.circin)
        .wait(2000)
        .to({alpha: 0}, 3000)
      scene3.addChild(weight);
    }

      scene3.addEventListener("tick", scene3.animateText);  
      scene3.addChild(scene3.data.tText); 
  
    return scene3;
}




 