let bestDesign;
let currentDesign;
let currentScore;
let currentScene;
let currentTime;
let currentWeather;
let currentCanvas;
let currentScenePixels;
let allScenes;

var rain = [];
let snow = [];

let fog = [];
let cloud = [];

let sun;
let moon;

function preload() {
  

  allScenes = sceneChanger();

  for (let i = 0; i < allScenes.length; i++) {
    let scenes = allScenes[i];
    scenes.image = loadImage(scenes.assetUrl);
    // scenes.image.resize(1200,800);
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = scenes.name;
    scene.appendChild(option);
  }

   let allTimes = timeChanger();

    for (let i = 0; i < allTimes.length; i++) {
      let times = allTimes[i];
      let option2 = document.createElement("option");
      option2.value = i;
      option2.innerHTML = times.name;
      time.appendChild(option2);
    }

  let allWeathers = weatherChanger();

  for (let j = 0; j < allWeathers.length; j++) {
    let weathers = allWeathers[j];
    let option3 = document.createElement("option");
    option3.value = j;
    option3.innerHTML = weathers.name;
    weather.appendChild(option3);
  }

  currentScene = allScenes[0];

  currentTime = allTimes[0];

  currentWeather = allWeathers[0];

  // submitButton.onclick = () => addScene(imageLink.value);




  confirmButton.onclick = () =>
  SceneChanged(allScenes[scene.value], allTimes[time.value], allWeathers[weather.value]);

  

}

function SceneChanged(nextScene, nextTime, nextWeather) {
  currentScene = nextScene;
  currentTime = nextTime;
  currentWeather = nextWeather;
  currentTime = nextTime;
  currentDesign = undefined;
  setup();
}
// function addScene(url){
//   let image = createImg(url, "Image"+(allScenes.length).toString());
//   // image.resize(1200,800);

//   allScenes.push({name: "Image"+(allScenes.length-1).toString(), assetUrl: image});
//   let scenes = allScenes[allScenes.length-1];
//     scenes.image = image;
//     // scenes.image.resize(1200,800);
//     let option = document.createElement("option");
//     option.value = allScenes.length-1;
//     option.innerHTML = scenes.name;
//     scene.appendChild(option);

// }


function setup() {
  currentCanvas = createCanvas(width-10, height);
  currentCanvas.parent(document.getElementById("active"));
  currentScore = Number.NEGATIVE_INFINITY;
  currentDesign = initialize(currentScene);
  bestDesign = currentDesign;
  image(currentScene.image, 0,0, width-10, height);
  loadPixels();
  currentScenePixels = pixels;
  if (currentWeather.name == "Rainy"){
      for(var i = 0; i < 200; i++) {
    rain[i] = new Rain();
}
  }
  if (currentWeather.name == "Snowy"){
    for (let i = 0; i < 250; i++) {
      snow.push(new Snow()); // append snowflake object
    }
}
if (currentWeather.name == "Foggy"){
   
  for (let i = 0; i < 30; i ++){
    fog[i] = new Fog();
  }
  
}
if (currentWeather.name == "Cloudy"){
  for (let i = 0; i < 5; i++){
    cloud[i] = new Cloud(i*20+random(200), 30*i+random(20));
    
  }

}

if (currentTime.name == "Sunrise"){
  sun = new Sun(10, 100,3, -2);

}

if (currentTime.name == "Morning"){
  sun = new Sun(150, 50,2,-1);

}
if (currentTime.name == "Afternoon"){
  sun = new Sun(320, 0, 2, 1);

}
if (currentTime.name == "Sunset"){
  sun = new Sun(470, 50, 3, 2);

}
if (currentTime.name == "Night"){
  moon = new Moon(230, 15);

}
}



function evaluate() {
  loadPixels();

  let error = 0;
  let n = pixels.length;
  
  for (let i = 0; i < n; i++) {
    error += sq(pixels[i] - currentScenePixels[i]);
  }
  return 1/(1+error/n);
}



let mutationCount = 0;

function draw() {



  let t = frameCount; 


  
  if(!currentDesign) {
    return;
  }
  randomSeed(mutationCount++);
  currentDesign = JSON.parse(JSON.stringify(bestDesign));

  randomSeed(0);
  render(currentDesign, currentScene, currentTime);
 
    bestDesign = currentDesign;
    

  if (currentWeather.name == "Rainy"){
    for(var i = 0; i < 200; i++) {
    rain[i].show();
    rain[i].update();
  }
  }
  if (currentWeather.name == "Snowy"){
    for (let flake of snow) {
      flake.update(t);
      flake.display(); // draw snowflake
    }
  }
  if (currentWeather.name == "Foggy"){
   
    for (let i = 0; i < 30; i++){
      fog[i].move();
      fog[i].display();
    }
    
  }
  if (currentWeather.name == "Cloudy"){
    for (let i = 0; i < 5; i++){
      cloud[i].update();
      cloud[i].display();

    }
  }

  noStroke();
  if (currentTime.name == "Night"){
    moon.update();
    moon.display();

  }
  else if (currentTime.name != "None"){
    sun.update();
  sun.display();
  }
  
  
}

