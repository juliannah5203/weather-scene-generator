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
function p4_initialize(inspiration) {
  
    let initial = {};
    resizeCanvas(inspiration.image.width/2, inspiration.image.height/2);
    if (inspiration.name == "Yosemite National Park"){
      initial = {opacity:{min: 1, max: 1}, intervals: 200};    
    }
  
    if (inspiration.name == "Yellowstone National Park"){
      initial = {opacity:{min: 1, max: 1}, intervals: 200};    
    }
  
    if (inspiration.name == "Niagara Falls"){
      initial = {opacity:{min: 1, max: 1}, intervals: 200};    
    }
   if (inspiration.name == "Lake Tahoe"){
      initial = { opacity:{min: 1, max: 1}, intervals: 200};    
    }
   if (inspiration.name == "Grand Canyon National Park"){
      initial = {opacity:{min: 1, max: 1}, intervals: 200};    
    }

    return initial;
}

function p4_render(design, inspiration) {
  push();
  background(0);
  noStroke();
  scale(0.5);
  let xStep = inspiration.image.width / design.intervals;
  let yStep = inspiration.image.height / design.intervals;
  let xCoor = 0;
  let yCoor = 0;
  for (let i = 0; i < design.intervals; i++){
    yCoor = 0;
    for (let j = 0; j < design.intervals; j++){
      
      for (let n = 0; n < 20; n++){
        let pxColor = inspiration.image.get(xCoor+xStep, yCoor+yStep);
        pxColor[4] = random(design.opacity.min, design.opacity.max);
        fill(pxColor);
        square(random(xCoor, xCoor+xStep), random(yCoor, yCoor+yStep), 3);
      }
      yCoor += yStep;
    }
    xCoor += xStep;
  }
  pop();

}


function opaController(param, mx, rate){
  param.max = rate*param.max;
  if(param.max < 0.3){
    param.max = 0.3 + random(min(rate*param.max,mx));
    param.min = 0.1;
  }
  return param;
}
function intController(mn, mx, rate){
  return random(rate*mn, rate*mx);
}

function p4_mutate(design, inspiration, rate) {

  design.opacity = opaController(design.opacity, 1, rate);
  design.intervals = intController(10, 100, rate);

  

}

