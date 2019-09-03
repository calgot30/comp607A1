
function page2Create(){
    var scene2 = new createjs.Container();
    scene2.name = "page2";
    scene2.data = {};
    scene2.data.tTimer = 0;
    scene2.data.tData = "Although New Zealand portrays itself as a clean and green country, \nit has " + 
    "its issues just like the rest of the world, this website explains\nto you the problems that " +
    "New Zealand has with pollution.";
    scene2.data.tIndex = 0;
    scene2.data.tText = new createjs.Text("", "22px Verdana", "#000000");
    scene2.data.tText.x = 20;
    scene2.data.tText.y = 20;
    scene2.data.fTimer = 0;
 
    
    
    scene2.animateText = function(event){
        if (scene2.data.tTimer < createjs.Ticker.getTime()){
            scene2.data.tTimer = createjs.Ticker.getTime() + 50;
            if (scene2.data.tIndex < scene2.data.tData.length){
                scene2.data.tText.text = scene2.data.tText.text + scene2.data.tData[scene2.data.tIndex];
                scene2.data.tIndex = scene2.data.tIndex + 1; 
            }
        }
    }; 
       
    var data = {
        images: [queue.getResult("River")],

        frames: {width:600, height:400, count:6, spacing:0, margin:0},
        animations: {
            moving:{
                frames:[0,1,2,3,4,5],
                speed:0.08
            }
        }
   
    }
    
    //scene2.beginFill("green");

    var spritesheet = new createjs.SpriteSheet(data);
    var runSprite = new createjs.Sprite(spritesheet, "run");

    var sheetSprite = new createjs.SpriteSheet(data);
    var spriteRun = new createjs.Sprite(sheetSprite, "run");

    runSprite.scaleX = 2.5; runSprite.scaleY = 1.1;
    runSprite.x = -0; runSprite.y = 150;

    spriteRun.scaleX = 1.4; spriteRun.scaleY = 1.2;
    spriteRun.x = 400; spriteRun.y = 150;


    createjs.Tween.get(runSprite)
        .call(function(){
            runSprite.gotoAndPlay("moving");
        })
        .to({x: -700}, 15000)
        .wait(2000)
        .to({x:-1000}, 2000)
        .to({scaleY: 0, y:500, alpha:0}, 5000)
        
        

    

    
   
    var imgChart = new createjs.Shape();
    var imgCar = new createjs.Shape();
    var imgRubbish = new createjs.Shape();

    // imgRubbish.graphics.beginFill("yellow").drawCircle(650,150,30);
    // imgCar.graphics.beginFill("blue").drawRect(550,450,50,50,2,2,2,2);

    imgChart.graphics.beginFill("#4287f5").drawCircle(560,510,120);

    imgChart.alpha = 0;
    imgChart.regX = 60;
    imgChart.regY = 60;

    setTimeout(drawChart, 10000);

        function drawChart(){
            createjs.Tween.get(imgChart)
                .to({alpha:1}, 20000)
                .to({rotation:360, rotationDir:1}, 5000)
                
        }

    scene2.addEventListener("tick", scene2.animateText);
    scene2.addChild(scene2.data.tText); 

    


    scene2.addChild(runSprite);
    //scene2.addChild(spriteRun);
    

    //scene2.addEventListener("tick", scene2.animateText);    
    //scene2.addEventListener("tick", animateTextTwo);
    
    //scene2.addChild(scene2.data.tText);   
    
    //scene2.addChild(scene2.data.tText);   
    scene2.addChild(imgChart);
    //scene2.addChild(imgCar);
    //scene2.addChild(imgRubbish);
   
   

    //a janky workaround to be able to use the setTimeout() function on an event listener,
    //the countdown is set as soon as the page is loaded.
    function createChild(){
        //scene2.removeChild(scene2.data.tText);
    }

    
    return scene2;
}