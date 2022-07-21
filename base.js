let bestDesign;
let currentDesign;
let currentScore;
let currentScene;
let currentTime;
let currentWeather;
let currentCanvas;
let currentScenePixels;

var drop = []
function preload() {
  

  let allScenes = sceneChanger();

  for (let i = 0; i < allScenes.length; i++) {
    let scenes = allScenes[i];
    scenes.image = loadImage(scenes.assetUrl);
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

  confirmButton.onclick = () =>
  SceneChanged(allScenes[scene.value], allTimes[time.value], allWeathers[weather.value]);
}

function SceneChanged(nextScene, nextTime, nextWeather) {
  currentScene = nextScene;
  currentTime = nextTime;
  currentWeather = nextWeather;
  currentTime = nextTime;
  currentDesign = undefined;
  // memory.innerHTML = "";
  setup();
}



function setup() {
  currentCanvas = createCanvas(width-10, height);
  currentCanvas.parent(document.getElementById("active"));
  currentScore = Number.NEGATIVE_INFINITY;
  currentDesign = initialize(currentScene);
  bestDesign = currentDesign;
  image(currentScene.image, 0,0, width-10, height);
  console.log(width, height);
  loadPixels();
  currentScenePixels = pixels;
  if (currentWeather.name == "Rainy"){
      for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
}
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



function memorialize() {

}

let mutationCount = 0;

function draw() {
  
  if(!currentDesign) {
    return;
  }
  randomSeed(mutationCount++);
  // console.log(mutationCount);
  currentDesign = JSON.parse(JSON.stringify(bestDesign));

  // mutate(currentDesign, currentScene, currentTime, currentWeather);
  randomSeed(0);
  render(currentDesign, currentScene, currentTime);
  // let nextScore = evaluate();
  // if (nextScore > currentScore) { 
  //   currentScore = nextScore;
    bestDesign = currentDesign;
    
  // }
  if (currentWeather.name == "Rainy"){
    for(var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();
  }
  }
  
  
}


