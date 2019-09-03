

/*
This page heavily relies on sprite animation, and bitmapping
The river is a spritesheet made by me, and I am manipulating its properties
to make it move across the page
*/
function page2Create(){

     /*
    all of the text content is created here, I used Mark Nikoras' example code
    from his 'smart cities' example to dynamically generate all the text on screen.

    There are functions which delay the text from being displayed all at once
    */
    var scene2 = new createjs.Container();
    scene2.name = "page2";
    scene2.data = {};
    scene2.data.tTimer = 0;
    scene2.data.tData = "Because of the large amount of agriculture in New Zealand,\n" +   
    "massive quantities of nitrogen is washed into waterways from animal \nurine" + 
    ", causing 'overfeeding' of microorganisms that we call algae" ;
    scene2.data.tIndex = 0;
    scene2.data.tText = new createjs.Text("", "22px Verdana", "#000000");
    scene2.data.tText.x = 20;
    scene2.data.tText.y = 20;
    scene2.data.fTimer = 0;
 
    scene2.textData = {};
    scene2.textData.tDTwo = "The algae then reproduces to excessive levels, causing what \n" + 
    "is known as an 'algal bloom'. These blooms starve the waterways of \n" + 
    "oxygen, killing off any local fish in the water.";
    scene2.textData.tDText = new createjs.Text("", "22px Verdana", "#000000");
    scene2.textData.tDText.x = 20;
    scene2.textData.tDText.y = 20;
    scene2.textData.tDTimer = 0;
    scene2.textData.tDIndex = 0; 

    scene2.textThreeData = {};
    scene2.textThreeData.tDTwo = "Humans are now coming under threat from nitrogen pollution, \n" + 
    "82 percent of New Zealand waterways are now \n" + 
    "deemed 'unsafe for swimming'.";
    scene2.textThreeData.tDText = new createjs.Text("", "22px Verdana", "#000000");
    scene2.textThreeData.tDText.x = 20;
    scene2.textThreeData.tDText.y = 20;
    scene2.textThreeData.tDTimer = 0;
    scene2.textThreeData.tDIndex = 0; 


    scene2.final = {};
    scene2.final.tTimer = 0;
    scene2.final.tData = "All information was gathered from the Ministry for the Environment";
    scene2.final.tIndex = 0;
    scene2.final.tText = new createjs.Text("", "16px Verdana", "#000000");
    scene2.final.tText.x = 130;
    scene2.final.tText.y = 580;
    scene2.final.fTimer = 0;

    
    scene2.animateText = function(event){
        if (scene2.data.tTimer < createjs.Ticker.getTime()){
            scene2.data.tTimer = createjs.Ticker.getTime() + 50;
            if (scene2.data.tIndex < scene2.data.tData.length){
                scene2.data.tText.text = scene2.data.tText.text + scene2.data.tData[scene2.data.tIndex];
                scene2.data.tIndex = scene2.data.tIndex + 1; 
            }
        }
    }; 

    scene2.animateTextTwo = function(event){     
        if (scene2.textData.tDTimer < createjs.Ticker.getTime()){
            scene2.textData.tDTimer = createjs.Ticker.getTime() + 50;
            if (scene2.textData.tDIndex < scene2.textData.tDTwo.length){
                scene2.textData.tDText.text = scene2.textData.tDText.text + scene2.textData.tDTwo[scene2.textData.tDIndex];
                scene2.textData.tDIndex = scene2.textData.tDIndex + 1;                
            }
        }    
    }; 

    scene2.animateTextThree = function(event){     
        if (scene2.textThreeData.tDTimer < createjs.Ticker.getTime()){
            scene2.textThreeData.tDTimer = createjs.Ticker.getTime() + 50;
            if (scene2.textThreeData.tDIndex < scene2.textThreeData.tDTwo.length){
                scene2.textThreeData.tDText.text = scene2.textThreeData.tDText.text + scene2.textThreeData.tDTwo[scene2.textThreeData.tDIndex];
                scene2.textThreeData.tDIndex = scene2.textThreeData.tDIndex + 1;                
            }
        }    
    }; 

    scene2.animateTextFour = function(event){
        if (scene2.final.tTimer < createjs.Ticker.getTime()){
            scene2.final.tTimer = createjs.Ticker.getTime() + 0;
            if (scene2.final.tIndex < scene2.final.tData.length){
                scene2.final.tText.text = scene2.final.tText.text + scene2.final.tData[scene2.final.tIndex];
                scene2.final.tIndex = scene2.final.tIndex + 1; 
            }
        }
    }; 


    /*
    methods I created to generate the text at separate times and also
    have it fade out as well, there was no wait function for text
    so I placed the addition of them to the scene inside of these 
    timeout functions.
    */
    setTimeout(holdText, 36000)
    function holdText(){
        scene2.addEventListener("tick", scene2.animateTextThree); 
        scene2.addChild(scene2.textThreeData.tDText);   
    }

    setTimeout(waitText, 19500)
    function waitText(){   
            scene2.addEventListener("tick", scene2.animateTextTwo); 
            scene2.addChild(scene2.textData.tDText);   
    }

    setTimeout(removeChild1, 34000)
    function removeChild1(){
        createjs.Tween.get(scene2.textData.tDText)
        .to({alpha:0}, 3000)
    }

    setTimeout(removeChild, 17000)

    function removeChild(){
        createjs.Tween.get(scene2.data.tText)
        .to({alpha:0}, 3000)
    }

    scene2.addEventListener("tick", scene2.animateTextFour);
    scene2.addChild(scene2.final.tText)
    createjs.Tween.get(scene2.final.tText)
    .to({alpha:0.5})

       
    //spritesheet data for the river
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


    
    //declaring sprite variable and action
    var spritesheet = new createjs.SpriteSheet(data);
    var runSprite = new createjs.Sprite(spritesheet, "run");

    //riversprite scaling
    runSprite.scaleX = 2.5; runSprite.scaleY = 1.1;
    runSprite.x = -0; runSprite.y = 140;


    //action to make the river across the screen, and then scale down
    //in size and then disappear off screen with alpha property
    createjs.Tween.get(runSprite)
        .call(function(){
            runSprite.gotoAndPlay("moving");
        })
        .to({x: -700}, 15000)
        .wait(2000)
        .to({x:-1000}, 2000)
        .to({scaleY: 0, y:500, alpha:0}, 5000)
        
        

    

    
    //declaring all of the extra shapes and bitmaps on screen
    var imgChart = new createjs.Shape();
    var imgAlgae = new createjs.Shape();
    var algaeDots = new createjs.Bitmap(queue.getResult("algae"));
    
    //This button was omitted out because of the difficulties I had implementing it
    //var button = new createjs.Bitmap(queue.getResult("Button"));
    // button.scaleX = 0.5;
    // button.scaleY = 0.5
    // button.x = 0;
    // button.y = 550;
    // button.alpha = 1;

    //setting the values for the algae dots
    algaeDots.scaleX = 0.8;
    algaeDots.scaleY = 0.8;
    algaeDots.regX = 150;
    algaeDots.regY = 150; 
    algaeDots.x = 400;
    algaeDots.y = 300;
    algaeDots.alpha = 0;

    //timeout function to stop the dots from being drawn early
    //They then are slowly brough into view, and then rotate to simulate the water
    //spinning
    setTimeout(drawDots, 27000)
    function drawDots(){
        createjs.Tween.get(algaeDots)
            .to({alpha: 1}, 6000)
            .to({rotation: 720, rotationDir:1}, 8000)
            .to({alpha:0}, 5000)
    }

    
    //changing the values for the algae "filling the water"
    imgAlgae.graphics.beginFill("red").drawCircle(0,0,2);
    imgAlgae.alpha = 0;
    imgAlgae.x = 400;
    imgAlgae.y = 300;

    /*
    This Tween scales the circle up and brings it to view, its supposed to look like it
    has consumed the pool of water
    */
    setTimeout(colorCircle, 35000)
    function colorCircle(){
        createjs.Tween.get(imgAlgae)
            .to({alpha: 1, scaleX: 60, scaleY: 60}, 6000, createjs.Ease.backOut)
            .to({})
    }

    

    //blue circle
    imgChart.graphics.beginFill("#4287f5").drawCircle(0,0,120);
    imgChart.alpha = 0;
    imgChart.x=   500;
    imgChart.y =  450; 
    imgChart.scaleX = 0.1;
    imgChart.scaleY = 0.1;

    /*
    This circle comes into view like it is being filled up by the running
    river
    */
    setTimeout(drawChart, 11000);
        function drawChart(){
            createjs.Tween.get(imgChart)
                .to({alpha:1, rotation:720, rotationDir:1,
                scaleX: 1, scaleY: 1 }, 15000)
                .to({x: 400, y: 300}, 2000, createjs.Ease.circOut)
                .to({rotation:720, rotationDir:1}, 2000)
                .to({style:"#d90f0f"}, 5000)
                .to({alpha: 0}, 8000)
                
        }

    scene2.addEventListener("tick", scene2.animateText);
    scene2.addChild(scene2.data.tText); 
    

    //So for this event I had some strange issues, for the most part that
    //My scenes were all being displayed at the same time and not running 
    //correctly, due to the lack of time I gave myself I 
    //chose to omit this event 
    // button.addEventListener("click",  
    // function goToURLC(){
    //     sceneDestroy(scene2);
    //     sindex = 0;
    //     sceneCreator(sindex);
    //   });

    //adding images to the scene
    scene2.addChild(runSprite);
    scene2.addChild(imgChart);
    scene2.addChild(imgAlgae);
    scene2.addChild(algaeDots);

    //ommitted this due to the reasoning above
    //scene2.addChild(button);
    

    //a janky workaround to be able to use the setTimeout() function on an event listener,
    //the countdown is set as soon as the page is loaded.
    function createChild(){
        //scene2.removeChild(scene2.data.tText);
    }

    
    return scene2;
}