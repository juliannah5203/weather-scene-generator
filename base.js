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

  submitButton.onclick = () => addScene(imageLink.value);




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
function addScene(url){
  let image = createImg(url, "Image"+(allScenes.length).toString());
  // image.resize(1200,800);

  allScenes.push({name: "Image"+(allScenes.length-1).toString(), assetUrl: image});
  let scenes = allScenes[allScenes.length-1];
    scenes.image = image;
    // scenes.image.resize(1200,800);
    let option = document.createElement("option");
    option.value = allScenes.length-1;
    option.innerHTML = scenes.name;
    scene.appendChild(option);

}


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
  
}

function Rain() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 3), random(3, 7));   
  }
  this.update = function() {
    this.speed = 25;
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}

function Snow() {
  this.posX = random(0, width);
  this.posY = random(0, -height);
  this.initialangle = random(0, 2 * PI);
  this.size = random(1,2);

  this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function(time) {
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.speed = 10;
    this.gravity = 1.05;

    this.posY += pow(this.size, 0.5) + this.speed * this.gravity;
    
    if (this.posY > height) {
      this.posY = random(0, -height);
      this.gravity = 0;
}
  };

  this.display = function() {
    fill(240);
  noStroke();
    rotate(PI/5);
    push();

    rect(this.posX-this.size/4, this.posY-this.size*5/2, this.size/2, this.size*5);
    rect(this.posX-this.size*5/2, this.posY-this.size/4, this.size*5, this.size/2);
    ellipse(this.posX, this.posY, this.size*2);

    pop();
  };
}

function Fog() {
 
  this.x = random(0,width);
  this.y = random(0, height);
  this.colour = color(400, 400, 400, random(25,75));
let size = random(150);


this.move = function() {
  this.x += random(0,20);
  this.y += random(-10,0);
  // this.y += random(0,3);
  if (this.x+20 > width || this.y > height) {
    this.x = random(0,width);
    this.y = random(30, height-50);
  }
}

this.display= function() {
  noStroke()
  fill(this.colour);
  
  
  ellipse(this.x, this.y, size, size-10);
  ellipse(this.x+30, this.y+20, size, size+20);
  ellipse(this.x-40, this.y+15, size, size-30);

}

}
function Cloud(cloudx, cloudy) {
  let size = random(50, 80);
  let opacity = random(100,200);
  this.display = function() {
    fill(color(250, 250, 250, opacity));
  noStroke();
  ellipse(cloudx, cloudy, size, 20);
  ellipse(cloudx + 10, cloudy + 10, size, 20);
  ellipse(cloudx - 20, cloudy + 10, size, 20);
  }
  this.update = function() {
    cloudx += random(5,15);
    if (cloudx > width){
      cloudx = 0;
    }
  }

}
