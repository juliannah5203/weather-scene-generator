function sceneChanger() {
  let scene = [];

  scene[0] = {
        name: "Yellowstone National Park",
        assetUrl: "./assets/yellowstone.png"
    };
  scene[1] = {
        name: "Yosemite National Park",
        assetUrl: "./assets/yosemite.png"
    };
  scene[2] = {
        name: "Grand Canyon National Park",
        assetUrl: "./assets/grandcanyon.png"
    };
  scene[3] = {
      name: "Lake Tahoe",
      assetUrl: "./assets/laketahoe.png"
  };
  scene[4] = {
      name: "Niagara Falls",
      assetUrl: "./assets/niagarafalls.png"
  };
 

    return scene;
}
function weatherChanger() {
  let weather = [];

  weather[0] = {
        name: "Sunny"
    };
  weather[1] = {
        name: "Rainy"
    };
  weather[2] = {
        name: "Cloudy"
    };
  weather[3] = {
      name: "Foggy"
  };
  weather[4] = {
      name: "Snowy"
  };
  return weather;
}
function timeChanger() {
  let time = [];

  time[0] = {
      name: "Dawn"
    };
  time[1] = {
      name: "Morning"
    };
  time[2] = {
      name: "Midday"
    };
  time[3] = {
      name: "Afternoon"
  };
  time[4] = {
      name: "Dusk"
  };
 

    return time;
}
function initialize(inspiration) {
  
    let initial = {};
    resizeCanvas(inspiration.image.width/2, inspiration.image.height/2);
    if (inspiration.name == "Yosemite National Park"){
      initial = {opacity:{min: 1, max: 1}, intervals: 75};    
    }
  
    if (inspiration.name == "Yellowstone National Park"){
      initial = {opacity:{min: 1, max: 1}, intervals: 75};    
    }
  
    if (inspiration.name == "Niagara Falls"){
      initial = {opacity:{min: 1, max: 1}, intervals: 75};    
    }
   if (inspiration.name == "Lake Tahoe"){
      initial = {opacity:{min: 1, max: 1}, intervals: 75};    
    }
   if (inspiration.name == "Grand Canyon National Park"){
      initial = {opacity:{min: 1, max: 1}, intervals: 75};    
    }

    return initial;
}

function render(design, inspiration) {
  push();
  background(0);
  noStroke();
  scale(0.5);
  let xStep = inspiration.image.width / design.intervals;
  let yStep = inspiration.image.height / design.intervals;
  let xCoor = 4+20;
  let yCoor = 4;
  for (let i = 0; i < design.intervals; i++){
    yCoor = 0;
    for (let j = 0; j < design.intervals; j++){
      
      for (let n = 0; n < 50; n++){
        let pxColor = inspiration.image.get(xCoor+xStep, yCoor+yStep);
        pxColor[4] = random(design.opacity.min, design.opacity.max);
        fill(pxColor);
        circle(xCoor, yCoor, 20);
      }
      yCoor += yStep;
    }
    xCoor += xStep;
  }
  // filter(GRAY, 2);
  // filter(POSTERIZE, 2);
  pop();

}


// function opaController(param, mx, rate){
//   param.max = rate*param.max;
//   if(param.max < 0.3){
//     param.max = 0.3 + random(min(rate*param.max,mx));
//     param.min = 0.1;
//   }
//   return param;
// }
// function intController(mn, mx, rate){
//   return random(rate*mn, rate*mx);
// }

function mutate(design, inspiration, time, weather) {

  // design.opacity = opaController(design.opacity, 1, rate);
  // design.intervals = intController(10, 100, rate);


  

}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 7), random(1, 7));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}