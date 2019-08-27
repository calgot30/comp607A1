function page1Create(){
    var scene = new createjs.Container();
    scene.name = "page1";
    scene.data = {};
    scene.data.tTimer = 0;
    scene.data.tData = "Although New Zealand portrays itself as a clean and green country, \n it has" + 
    "its issues just like the rest of the world, this website explains to you the problems that \n" +
    "New Zealand has with pollution.";
    scene.data.tIndex = 0;
    scene.data.tText = new createjs.Text("", "22px Verdana", "#000000");
    scene.data.tText.x = 20;
    scene.data.tText.y = 20;
    scene.data.finished = false;
    scene.data.fTimer = 0;



    scene.animateText = function(event){
        if (scene.data.tTimer < createjs.Ticker.getTime()){
            scene.data.tTimer = createjs.Ticker.getTime() + 50;
            if (scene.data.tIndex < scene.data.tData.length){
                scene.data.tText.text = scene.data.tText.text + scene.data.tData[scene.data.tIndex];
                scene.data.tIndex = scene.data.tIndex + 1;                
            }
        }
    };
    
    
    
    scene.addEventListener("tick", scene.animateText);       
    scene.addChild(scene.data.tText);    
    return scene;
}

